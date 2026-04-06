import BotIcon from "./BotIcon"

const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-2">
      <BotIcon size={28} />
      <div className="flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-[#a0a0a0] animate-bounce" style={{ animationDelay: "0ms" }}></span>
        <span className="w-2 h-2 rounded-full bg-[#a0a0a0] animate-bounce" style={{ animationDelay: "150ms" }}></span>
        <span className="w-2 h-2 rounded-full bg-[#a0a0a0] animate-bounce" style={{ animationDelay: "300ms" }}></span>
      </div>
    </div>
  )
}

export default TypingIndicator