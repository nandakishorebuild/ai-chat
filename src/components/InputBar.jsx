import { useState } from "react"
import { useChat } from "../context/ChatContext"
import { sendMessageToGroq } from "../services/groqService"

const InputBar = () => {

  const [input, setInput] = useState("")
  const { messages, addMessage, loading, setLoading } = useChat()

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput("")
    addMessage("user", userMessage)
    setLoading(true)

    try {
      const reply = await sendMessageToGroq(userMessage, messages)
      addMessage("ai", reply)
    } catch (error) {
      addMessage("ai", "Too many requests. Please wait a moment and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="bg-[#141414] border-t border-[#333333] px-4 py-3 flex items-center gap-3">
      <textarea
        rows={1}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything..."
        className="flex-1 bg-[#242424] border border-[#333333] text-[#ececec] text-sm rounded-xl px-4 py-2 resize-none outline-none placeholder-[#666666] focus:border-[#c96442]"
      />
      <button
        onClick={handleSend}
        disabled={!input.trim() || loading}
        className="w-10 h-10 rounded-xl bg-[#c96442] flex items-center justify-center flex-shrink-0 disabled:opacity-40"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
        </svg>
      </button>
    </div>
  )
}

export default InputBar