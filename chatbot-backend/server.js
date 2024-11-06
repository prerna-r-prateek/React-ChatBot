const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from React app

app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  let botReply;

  if (userMessage.includes('hello')) {
    botReply = "Hello! How can I help you today?";
  } else {
    botReply = "I'm not sure how to respond to that.";
  }

  res.json({ reply: botReply });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
