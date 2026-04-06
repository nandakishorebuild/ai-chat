import axios from "axios"

export const sendMessageToGemini = async (userMessage, chatHistory = []) => {

  // Convert our messages to the format Groq API understands
  const formattedHistory = chatHistory.map((msg) => ({
    role: msg.role === "user" ? "user" : "assistant",
    content: msg.text,
  }))

  // Send request to Groq API
  const response = await axios.post(

    // Groq API URL
    "https://api.groq.com/openai/v1/chat/completions",

    // Request body - what we are sending
    {
      model: "llama-3.1-8b-instant",
      messages: [

        // System message - tells AI how to behave
        { role: "system", content: "You are a helpful AI assistant." },

        // Previous chat history
        ...formattedHistory,

        // Latest user message
        { role: "user", content: userMessage },

      ],
      max_tokens: 1000,
    },

    // Headers - our API key goes here
    {
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      },
    }
  )

  // Return only the AI reply text
  return response.data.choices[0].message.content
}