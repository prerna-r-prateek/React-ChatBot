// Chatbot.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages([...messages, userMessage]);

      try {
        const response = await axios.post("http://localhost:5000/chat", { message: input });
        const botMessage = { sender: "bot", text: response.data.reply };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error fetching response:", error);
        const errorMessage = { sender: "bot", text: "Sorry, there was an error." };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }

      setInput("");
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
