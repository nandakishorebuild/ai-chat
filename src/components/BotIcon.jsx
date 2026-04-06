const BotIcon = ({ size = 28 }) => {
  return (
    <div
      className="rounded-full bg-[#c96442] flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect x="4" y="8" width="16" height="11" rx="2" fill="white" opacity="0.9" />
        <rect x="9" y="4" width="6" height="4" rx="1" fill="white" opacity="0.9" />
        <line x1="12" y1="4" x2="12" y2="8" stroke="white" strokeWidth="1.5" />
        <circle cx="9" cy="13" r="1.5" fill="#c96442" />
        <circle cx="15" cy="13" r="1.5" fill="#c96442" />
        <rect x="8.5" y="16" width="7" height="1.5" rx="0.75" fill="#c96442" />
        <line x1="4" y1="12" x2="2" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default BotIcon