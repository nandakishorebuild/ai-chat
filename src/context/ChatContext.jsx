import { createContext, useContext, useState, useEffect } from "react"

const ChatContext = createContext()

export const ChatProvider = ({ children }) => {

  const [messages, setMessages] = useState([])
  const [chatHistory, setChatHistory] = useState([])
  const [loading, setLoading] = useState(false)

  // 👉 simple flag (to avoid duplicate chats)
  const [isOldChat, setIsOldChat] = useState(false)

  // 👉 add message
  const addMessage = (role, text) => {
    setMessages(prev => [...prev, { role, text }])
    setIsOldChat(false) // now it's a new chat
  }

  // 👉 new chat button
  const clearChat = () => {
    if (messages.length > 0 && !isOldChat) {
      setChatHistory(prev => [...prev, messages])
    }
    setMessages([])
    setIsOldChat(false)
  }

  // 👉 load old chat
  const loadChat = (chat) => {
    setMessages(chat)
    setIsOldChat(true) // mark as old chat
  }

  // 👉 save chats in localStorage
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory))
  }, [chatHistory])

  // 👉 load chats from localStorage
  useEffect(() => {
    const savedChats = JSON.parse(localStorage.getItem("chatHistory")) || []
    setChatHistory(savedChats)
  }, [])

  return (
    <ChatContext.Provider
      value={{
        messages,
        loading,
        setLoading,
        addMessage,
        clearChat,
        chatHistory,
        loadChat
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)