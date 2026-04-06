import { useState } from "react"
import ReactMarkdown from "react-markdown"
import BotIcon from "./BotIcon"

const ChatBubble = ({ role, text }) => {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // User message
  if (role === "user") {
    return (
      <div className="flex justify-end px-4 py-1">
        <div className="max-w-[75%] bg-[#2a2a2a] border border-[#333333] text-[#ececec] text-sm rounded-2xl rounded-br-sm px-4 py-2 leading-relaxed">
          {text}
        </div>
      </div>
    )
  }

  // AI message
  return (
    <div className="flex items-start gap-3 px-4 py-2">
      <BotIcon size={28} />
      <div className="flex flex-col gap-2 max-w-[80%]">

        <div className="text-[#ececec] text-sm leading-relaxed flex flex-col gap-2">
          <ReactMarkdown
            components={{

              // Bold text
              strong: ({ children }) => (
                <strong className="text-[#ececec] font-semibold">{children}</strong>
              ),

              // Paragraph
              p: ({ children }) => (
                <p className="text-[#ececec] leading-relaxed">{children}</p>
              ),

              // Numbered list
              ol: ({ children }) => (
                <ol className="list-decimal list-outside pl-5 flex flex-col gap-1">
                  {children}
                </ol>
              ),

              // Bullet list
              ul: ({ children }) => (
                <ul className="list-disc list-outside pl-5 flex flex-col gap-1">
                  {children}
                </ul>
              ),

              // List item
              li: ({ children }) => (
                <li className="text-[#ececec] leading-relaxed">{children}</li>
              ),

              // Heading 1
              h1: ({ children }) => (
                <h1 className="text-[#ececec] text-lg font-semibold mt-2">{children}</h1>
              ),

              // Heading 2
              h2: ({ children }) => (
                <h2 className="text-[#ececec] text-base font-semibold mt-2">{children}</h2>
              ),

              // Heading 3
              h3: ({ children }) => (
                <h3 className="text-[#ececec] text-sm font-semibold mt-1">{children}</h3>
              ),

              // Inline code
              code: ({ children }) => (
                <code className="bg-[#2a2a2a] text-[#c96442] px-1.5 py-0.5 rounded text-xs font-mono">
                  {children}
                </code>
              ),

              // Code block
              pre: ({ children }) => (
                <pre className="bg-[#242424] border border-[#333333] rounded-xl px-4 py-3 overflow-x-auto text-xs font-mono text-[#ececec] mt-1">
                  {children}
                </pre>
              ),

            }}
          >
            {text}
          </ReactMarkdown>
        </div>

        <button
          onClick={handleCopy}
          className="text-xs text-[#666666] hover:text-[#a0a0a0] text-left w-fit"
        >
          {copied ? "copied!" : "copy response"}
        </button>

      </div>
    </div>
  )
}

export default ChatBubble