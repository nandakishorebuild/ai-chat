import { useEffect, useRef } from "react"
import { useChat } from "../context/ChatContext"
import ChatBubble from "./ChatBubble"
import TypingIndicator from "./TypingIndicator"
import BotIcon from "./BotIcon"

const ChatWindow = () => {

  const { messages, loading } = useChat()
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  return (
    <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2">

      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
          <BotIcon size={56} />
          <h2 className="text-[#ececec] text-xl font-semibold">How can I help you?</h2>
          <p className="text-[#a0a0a0] text-sm">Ask me anything — coding, career, general knowledge</p>
        </div>
      )}

      {messages.map((msg, index) => (
        <ChatBubble key={index} role={msg.role} text={msg.text} />
      ))}

      {loading && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  )
}

export default ChatWindow