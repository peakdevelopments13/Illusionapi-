// illusionRadioAPI.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://panel.radiocast.net/api/nowplaying/83');
    const data = await response.json();
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`API proxy running on port ${PORT}`);
});
