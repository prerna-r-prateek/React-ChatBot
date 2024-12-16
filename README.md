## Setup

Before running this project, ensure you have set your [OpenAI API key](https://platform.openai.com/account/api-keys) as an environment variable.

1. **Obtain your API Key**  
   Sign in to the [OpenAI Dashboard](https://platform.openai.com/) and go to the **View API keys** page to generate or copy your API key.

2. **Set the Environment Variable**  
   Export your OpenAI API key as an environment variable.
   For example, on Linux or macOS:

   ```bash
   export YOUR_OPENAI_API_KEY="sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
   ```
   For Windows
   ```bash
   $env:YOUR_OPENAI_API_KEY="sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
   ```
   
# Running Frontend and Backend Projects Simultaneously

To run both the frontend and backend projects at the same time, follow these steps:

### Step 1: Start the Frontend Server

1. Navigate to the `chatbot` directory:
   ```bash
   cd chatbot
   ```
2. Start the frontend server:
   ```bash
   npm start
   ```

Port: The React frontend runs on PORT 3000.

### Step 2: Start the Backend Server

1. Navigate to the `chatbot-backend` directory:
   ```bash
   cd chatbot-backend
   ```

2. Start the backend server:
   ```bash
   node server.js
   ```

Port: The backend server runs on PORT 5000.

Go to http://localhost:3000 in your browser
