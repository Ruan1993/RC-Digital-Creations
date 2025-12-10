export default async function handler(req, res) {
  const ALLOWED_ORIGINS = process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(',').map(s => s.trim())
    : ['https://rcdigitalcreations.co.za'];

  const DEFAULT_MODEL = process.env.GOOGLE_MODEL || 'gemini-2.5-flash';
  const DEFAULT_TEMPERATURE = parseFloat(process.env.LLM_TEMPERATURE) || 0.2;

  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGINS[0]);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json({ message: 'OK' });
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      res.status(500).json({ error: 'Missing GEMINI_API_KEY environment variable' });
      return;
    }

    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body || '{}'); } catch { body = {}; }
    }

    const { query, context } = body || {};
    const model = body?.model || DEFAULT_MODEL;

    if (!query || !context) {
      res.status(400).json({ error: 'Missing required fields: query and context' });
      return;
    }

    const systemPrompt = `
You are Vector, the super-friendly, slightly cheeky AI assistant for RC Digital Creations in Stilbaai.

Rules:
- Talk like a cool human friend who knows web design inside out.
- Use occasional light emojis (never more than 2 per message).
- Keep replies must feel warm and natural.
- Always steer toward booking a call or WhatsApp.
- If asked about price, say: "Our popular Business Starter Pack is just R5,200 (includes design, domain & hosting!). Custom sites typically range from R5,000 to R15,000 depending on complexity. Want a specific quote? Let's chat!"
- End most replies with a short question to keep the chat going.

Examples:
User: Hi → "Hey there! Ready to make your business look ridiculously good online?"
User: How much for a website? → "We have a killer Starter Pack for R5,200! For bigger custom projects, it's usually between R5k–R15k. What do you have in mind?"
User: Thanks → "My pleasure! When are you free for a 15-min chat? WhatsApp works too: 063 473 3098"

CONTEXT (only use this):
---
${context}
---
`.trim();

    const payload = {
      contents: [
        { role: 'user', parts: [{ text: systemPrompt }] },
        ...(body.history || []),
        { role: 'user', parts: [{ text: 'Question: ' + query }] }
      ],
      generationConfig: {
        temperature: 0.8,        // more playful
        maxOutputTokens: 280,
        topP: 0.95
      }
    };

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;

    const resp = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) {
      const text = await resp.text();
      res.status(resp.status).json({ error: `Upstream error: ${resp.status} ${resp.statusText}`, details: text });
      return;
    }

    const result = await resp.json();
    let aiText = '';
    if (result?.candidates?.[0]?.content?.parts?.[0]?.text) {
      aiText = result.candidates[0].content.parts[0].text;
    }

    res.status(200).json({ text: aiText });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: String(err) });
  }
}
