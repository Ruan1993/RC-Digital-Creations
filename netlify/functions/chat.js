exports.handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Missing GEMINI_API_KEY environment variable' }),
      };
    }

    const { query, context, model = 'gemini-1.5-flash-latest' } = JSON.parse(event.body || '{}');
    if (!query || !context) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Missing required fields: query and context' }),
      };
    }

    const systemPrompt = `You are Vector, a helpful, professional, and tech-savvy AI assistant for RC Digital Creations.\n` +
      `Your primary goal is to answer user questions using ONLY the content provided in the 'CONTEXT' section below.\n` +
      `Do not use any external knowledge.\n` +
      `If the CONTEXT does not contain the necessary information to answer the question, you MUST respond only with:\n` +
      `"I'm sorry, I couldn't find information about that specific topic in the provided website content. Please try rephrasing your question or check the website directly."\n` +
      `You may engage in brief, friendly small talk only before or after a factual answer. Your tone is polite, community-focused, and slightly technical. Never invent business facts.\n` +
      `Keep your answers brief, friendly, and directly related to the user's query.\n\n` +
      `CONTEXT:\n---\n${context}\n---`;

    const payload = {
      contents: [
        {
          role: 'user',
          parts: [{ text: systemPrompt }, { text: 'Question: ' + query }],
        },
      ],
      generationConfig: { temperature: 0.2, maxOutputTokens: 250 },
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return {
        statusCode: resp.status,
        headers: corsHeaders,
        body: JSON.stringify({ error: `Upstream error: ${resp.status} ${resp.statusText}`, details: text }),
      };
    }

    const result = await resp.json();
    let aiText = '';
    if (result?.candidates?.[0]?.content?.parts?.[0]?.text) {
      aiText = result.candidates[0].content.parts[0].text;
    }

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: aiText }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Function error', details: String(err) }),
    };
  }
};
