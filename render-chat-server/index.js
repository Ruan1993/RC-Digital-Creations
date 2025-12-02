const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'https://rcdigitalcreations.co.za' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Vector Proxy is LIVE');
});

app.post('/api/chat', async (req, res) => {
  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Missing GEMINI_API_KEY environment variable' });
    }

    const { query, context, model = 'gemini-1.5-flash-latest' } = req.body || {};
    if (!query || !context) {
      return res.status(400).json({ error: 'Missing required fields: query and context' });
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
      return res.status(resp.status).json({ error: `Upstream error: ${resp.status} ${resp.statusText}`, details: text });
    }

    const result = await resp.json();
    let aiText = '';
    if (result?.candidates?.[0]?.content?.parts?.[0]?.text) {
      aiText = result.candidates[0].content.parts[0].text;
    }

    return res.status(200).json({ text: aiText });
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: String(err) });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Vector chat proxy listening on port ${PORT}`);
});