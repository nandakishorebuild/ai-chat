import BotIcon from "./BotIcon"
import { useChat } from "../context/ChatContext"

const Sidebar = ({ isOpen, onClose, onClearChat }) => {
  const { chatHistory, loadChat } = useChat()

  return (
    <>
      {/* Overlay - mobile only */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#141414] border-r border-[#333333]
          flex flex-col gap-4 p-4 z-20
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:flex md:w-64
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BotIcon size={28} />
            <span className="text-[#ececec] font-semibold text-sm">AI Chat</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#666666] hover:text-[#a0a0a0] text-lg md:hidden"
          >
            ✕
          </button>
        </div>

        {/* New Chat button */}
        <button
          onClick={() => {
            onClearChat()
            onClose()
          }}
          className="w-full bg-[#242424] border border-[#333333] text-[#ececec] text-sm rounded-xl py-2 hover:bg-[#2a2a2a]"
        >
          + New chat
        </button>

        {/* Recent chats */}
        <div className="flex flex-col gap-1 overflow-y-auto">
          <p className="text-[#666666] text-xs mb-1">Recent chats</p>

          {chatHistory.length === 0 ? (
            <p className="text-[#666666] text-xs px-2">
              No chats yet
            </p>
          ) : (
            chatHistory.map((chat, index) => (
              <div
                key={index}
                onClick={() => {
                  loadChat(chat)
                  onClose()
                }}
                className="text-[#a0a0a0] text-xs px-2 py-2 rounded-lg bg-[#242424] hover:bg-[#2a2a2a] cursor-pointer"
              >
                {/* Show first message as title */}
                {chat[0]?.text
                  ? chat[0].text.slice(0, 25)
                  : `Chat ${index + 1}`}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Sidebar