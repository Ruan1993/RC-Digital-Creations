export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://rcdigitalcreations.co.za');
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

    const { query, context, model = 'gemini-1.5-flash-latest' } = body || {};
    if (!query || !context) {
      res.status(400).json({ error: 'Missing required fields: query and context' });
      return;
    }

    const systemPrompt = [
      'You are Vector, a helpful, professional, and tech-savvy AI assistant for RC Digital Creations.',
      "Your primary goal is to answer user questions using ONLY the content provided in the 'CONTEXT' section below.",
      'Do not use any external knowledge.',
      'If the CONTEXT does not contain the necessary information to answer the question, you MUST respond only with:',
      "\"I'm sorry, I couldn't find information about that specific topic in the provided website content. Please try rephrasing your question or check the website directly.\"",
      'You may engage in brief, friendly small talk only before or after a factual answer. Your tone is polite, community-focused, and slightly technical. Never invent business facts.',
      "Keep your answers brief, friendly, and directly related to the user's query.",
      '',
      'CONTEXT:',
      '---',
      context,
      '---'
    ].join('\n');

    const payload = {
      contents: [
        { role: 'user', parts: [{ text: systemPrompt }, { text: 'Question: ' + query }] }
      ],
      generationConfig: { temperature: 0.2, maxOutputTokens: 250 }
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

