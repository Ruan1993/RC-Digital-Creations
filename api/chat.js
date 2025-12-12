export default async function handler(req, res) { 
  // 1. SETUP CORS (Allows Wilma's site and others to talk to this server) 
  const ALLOWED_ORIGINS = process.env.CORS_ORIGINS 
    ? process.env.CORS_ORIGINS.split(',').map(s => s.trim()) 
    : ['https://rcdigitalcreations.co.za']; // Fallback 

  const DEFAULT_MODEL = process.env.GOOGLE_MODEL || 'gemini-2.5-flash'; 

  const origin = req.headers.origin; 
  
  // Dynamic CORS: If the visitor is from a trusted site (like Wilma's), allow them. 
  if (origin && ALLOWED_ORIGINS.includes(origin)) { 
    res.setHeader('Access-Control-Allow-Origin', origin); 
  } else { 
    // Default to your main site if the origin is unknown or missing 
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGINS[0]); 
  } 
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 

  // Handle preflight requests (browser checking permissions) 
  if (req.method === 'OPTIONS') { res.status(200).end(); return; } 
  if (req.method === 'GET') { res.status(200).json({ message: 'OK' }); return; } 

  try { 
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY; 
    if (!GEMINI_API_KEY) { 
      res.status(500).json({ error: 'Server Config Error: Missing API Key' }); 
      return; 
    } 

    let body = req.body; 
    // Parse body if it came in as a string 
    if (typeof body === 'string') { try { body = JSON.parse(body || '{}'); } catch { body = {}; } } 

    // 2. DYNAMIC IDENTITY (The Magic Part) 
    // We default to "Vector" if no name is sent, but Wilma's site will send "Bella" 
    const { 
      query, 
      context, 
      history, 
      botName = "Vector", 
      businessName = "RC Digital Creations" 
    } = body || {}; 

    if (!query || !context) { 
      res.status(400).json({ error: 'Missing required fields' }); 
      return; 
    } 

    // 3. DYNAMIC SYSTEM PROMPT 
    const systemPrompt = ` 
You are ${botName}, the friendly AI assistant for ${businessName}. 

Rules: 
- Talk like a helpful human employee of ${businessName}. 
- Use occasional light emojis. 
- Always steer toward booking/contacting. 
- STRICT FORMATTING: No asterisks, no Markdown. Short paragraphs. 
- If asked about prices, look STRICTLY at the Context provided. 

CONTEXT: 
--- 
${context} 
--- 
`.trim(); 

    const payload = { 
      contents: [ 
        { role: 'user', parts: [{ text: systemPrompt }] }, 
        ...(history || []), 
        { role: 'user', parts: [{ text: 'Question: ' + query }] } 
      ], 
      generationConfig: { 
        temperature: 0.8,        
        maxOutputTokens: 1000, 
        topP: 0.95 
      } 
    }; 

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${DEFAULT_MODEL}:generateContent?key=${GEMINI_API_KEY}`; 

    const resp = await fetch(API_URL, { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(payload) 
    }); 

    if (!resp.ok) { 
      const text = await resp.text(); 
      res.status(resp.status).json({ error: `Gemini API Error`, details: text }); 
      return; 
    } 

    const result = await resp.json(); 
    let aiText = ''; 
    if (result?.candidates?.[0]?.content?.parts?.[0]?.text) { 
      aiText = result.candidates[0].content.parts[0].text; 
    } 

    res.status(200).json({ text: aiText }); 

  } catch (err) { 
    console.error("API Handler Error:", err); 
    res.status(500).json({ error: 'Server error', details: String(err) }); 
  } 
}