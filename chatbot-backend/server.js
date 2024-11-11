const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Import cors

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from React app

require('dotenv').config();
const OPENAI_API_KEY = process.env.YOUR_OPENAI_API_KEY
app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access to it
        messages: [{ role: 'user', content: userMessage }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const botReply = response.data.choices[0].message.content;
    res.json({ reply: botReply });
  } catch (error) {
    console.error('Error communicating with OpenAI API:', error);
    res.status(500).json({ error: 'Failed to fetch response from OpenAI API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});