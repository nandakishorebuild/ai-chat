import { useState } from "react"
import { useChat } from "./context/ChatContext"
import Sidebar from "./components/Sidebar"
import ChatWindow from "./components/ChatWindow"
import InputBar from "./components/InputBar"
import BotIcon from "./components/BotIcon"

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { clearChat } = useChat()

  return (
    <div className="flex bg-[#1a1a1a] h-full w-full overflow-hidden">

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onClearChat={clearChat}
      />

      {/* Main area */}
      <div className="flex flex-col flex-1 overflow-hidden h-full">

        {/* Header */}
        <div className="flex-shrink-0 bg-[#141414] border-b border-[#333333] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">

            {/* Hamburger - mobile only */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex flex-col gap-1 md:hidden"
            >
              <span className="w-5 h-0.5 bg-[#a0a0a0] rounded"></span>
              <span className="w-5 h-0.5 bg-[#a0a0a0] rounded"></span>
              <span className="w-5 h-0.5 bg-[#a0a0a0] rounded"></span>
            </button>

            <BotIcon size={30} />
            <div>
              <h1 className="text-[#ececec] text-sm font-semibold">AI Assistant</h1>
              <p className="text-[#666666] text-xs">Powered by Groq AI</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#666666] text-xs border border-[#333333] rounded-lg px-2 py-1">
              Groq 2.0
            </span>
            <button
              onClick={clearChat}
              className="text-[#a0a0a0] text-xs border border-[#333333] rounded-lg px-2 py-1 hover:bg-[#242424]"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Chat area */}
        <ChatWindow />

        {/* Input */}
        <div className="flex-shrink-0">
          <InputBar />
        </div>

      </div>
    </div>
  )
}

export default App