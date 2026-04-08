# 🤖 AI Chat Assistant

A modern AI-powered chat application built with React.js and Groq API (Llama 3). Clean Claude-inspired dark UI with full mobile and desktop support.

🔗 **Live Demo:** [ai-chats-omega.vercel.app](https://ai-chats-omega.vercel.app/)
📁 **GitHub:** [nandakishorebuild/ai-chat](https://github.com/nandakishorebuild/ai-chat)

---

## 📸 Screenshots

### 🖥️ Desktop View
![Desktop View](https://i.postimg.cc/8cGGScCQ/chat-app-laptop-ui.png)

### 📱 Mobile View
![Mobile View](https://i.postimg.cc/mDGJcqWN/chat-app-mobile-ui.png)

---

## ✨ Features

- 💬 Real-time AI chat powered by **Groq API (Llama 3)**
- 📝 **Markdown rendering** — bold, lists, code blocks, headings
- 📋 **Copy response** button on every AI message
- 🧹 **Clear chat** to start fresh anytime
- 📱 **Fully responsive** — mobile drawer sidebar + desktop layout
- ⌨️ Send message with **Enter key** or send button
- ⏳ **Typing indicator** while AI is responding
- 🚫 Send button **disabled** while AI is responding (no spam)
- 🌙 **Claude-inspired dark theme** UI

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend UI |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| Context API | State management |
| Groq API (Llama 3) | AI responses |
| Axios | API calls |
| React Markdown | Markdown rendering |
| Vercel | Deployment |

---

## 📁 Project Structure

```
src/
├── context/
│   └── ChatContext.jsx       # Global state - messages, loading
├── components/
│   ├── BotIcon.jsx           # Robot SVG avatar
│   ├── TypingIndicator.jsx   # Animated dots while AI responds
│   ├── ChatBubble.jsx        # User and AI message bubbles
│   ├── ChatWindow.jsx        # Scrollable chat area
│   ├── InputBar.jsx          # Text input and send button
│   └── Sidebar.jsx           # Desktop sidebar + mobile drawer
├── services/
│   └── groqService.js        # Groq API call logic
├── App.jsx                   # Main layout
├── main.jsx                  # App entry point
└── index.css                 # Global styles
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nandakishorebuild/ai-chat.git
cd ai-chat
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get your free Groq API key

- Go to 👉 [console.groq.com](https://console.groq.com)
- Sign up for free (no credit card required)
- Create a new API key

### 4. Create `.env` file in root folder

```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

### 5. Run the project

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser ✅

---

## 🌐 Deployment on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Add environment variable in Vercel:
   - Key: `VITE_GROQ_API_KEY`
   - Value: your Groq API key
4. Click **Deploy** ✅

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_GROQ_API_KEY` | Your Groq API key from console.groq.com |

> ⚠️ Never push your `.env` file to GitHub. It is already added to `.gitignore` for safety.

---

## 👨‍💻 Author

**Nanda Kishore**
- 🐙 GitHub: [@nandakishorebuild](https://github.com/nandakishorebuild)
- 💼 LinkedIn: [linkedin.com/in/nandakishore](https://www.linkedin.com/in/nandakishore3960)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
