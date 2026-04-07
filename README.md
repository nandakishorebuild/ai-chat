# 🤖 AI Chat Assistant

A modern, responsive AI chatbot web application powered by **React.js**, **Tailwind CSS**, and **Groq AI**. Enjoy lightning-fast, highly accurate conversations with a sleek interface, complete with Markdown rendering and chat history.

🌐 **Live Demo:** [https://ai-chats-omega.vercel.app]
📂 **GitHub:** [https://github.com/nandakishorebuild/ai-chat]

---

## 🚀 Features

- 🔥 **Lightning-Fast AI** — Instant responses powered by Groq's incredibly fast inference API models
- 📝 **Markdown Support** — Fully renders lists, code blocks, and formatted text directly in the chat using `react-markdown`
- 📱 **Mobile-First Design** — Fully responsive layout featuring a collapsible sidebar and clean mobile views
- 💬 **Smart Chat Interface** — Features auto-scrolling chat windows, typing indicators, and sleek custom chat bubbles
- 🌙 **Sleek Dark UI** — An elegant, eye-friendly dark theme (`#1a1a1a`) optimized for long chatbot sessions
- 🧹 **Session Management** — Clear your entire chat history seamlessly with a single click
- 💾 **State Management** — Maintains conversation history and context easily using React Context API

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| ⚛️ React.js | Frontend UI library |
| 🗃️ React Context API | Global state management for chat history and loading states |
| 🎨 Tailwind CSS v4 | Utility-first styling for the entire UI |
| 📡 Axios | HTTP requests to Groq API |
| 🤖 Groq API | Language model API powering the core intelligence |
| ✨ React Markdown | Rendering complex markdown syntax and code blocks in responses |
| ⚡ Vite | Fast build tool and optimized development server |
| 🌐 Vercel | Seamless deployment and hosting |

---

## 📁 Folder Structure

```
ai-chat/
├── public/                # Static public assets
├── src/
│   ├── assets/            # Static images, SVGs, and other local assets
│   ├── components/
│   │   ├── BotIcon.jsx         # SVG Icon for the AI Bot
│   │   ├── ChatBubble.jsx      # Component rendering individual user/bot messages
│   │   ├── ChatWindow.jsx      # Scrollable window displaying the message list
│   │   ├── InputBar.jsx        # Text area for user input with a submit button
│   │   ├── Sidebar.jsx         # Responsive sidebar for settings/history
│   │   └── TypingIndicator.jsx # Animated indicator while waiting for bot
│   ├── context/
│   │   └── ChatContext.jsx     # React Context provider for global chat state
│   ├── services/
│   │   └── groqService.js      # Helper functions handling Groq API requests
│   ├── App.jsx                 # Main application layout and routing
│   ├── index.css               # Global styles and Tailwind configuration
│   └── main.jsx                # React application entry point
├── .env                        # Environment variables (not pushed to GitHub)
├── package.json                # Dependencies and scripts tasks
└── vite.config.js              # Vite bundler configuration
```

---

## 📡 API Endpoints Used

| Purpose | Service / Endpoint |
|---|---|
| AI Chat Completions | Groq API (`https://api.groq.com/openai/v1/chat/completions`) |

---

## ⚙️ Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/nandakishorebuild/ai-chat.git
cd ai-chat
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file in root folder

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

> 🔑 Get your free API key from the [Groq Console](https://console.groq.com/)

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```
http://localhost:5173
```

---

## 🌐 Deployment

This project can be easily deployed on **Vercel** or **Netlify**.

To deploy your own:
1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Add the `VITE_GROQ_API_KEY` environment variable in the Vercel dashboard settings
4. Click Deploy!

---

## 📸 Screenshots

### 🏠 Main Chat Interface
> *desktop app view*
`![Chat Interface](https://i.postimg.cc/8cGGScCQ/chat-app-laptop-ui.png)`

### 📱 Mobile View
> *mobile friendly view*
`![Mobile View](https://i.postimg.cc/mDGJcqWN/chat-app-mobile-ui.png)`

---

## 🧠 Key Concepts Implemented

- ✅ **Context API** — Global state management for maintaining messages and UI loading states without prop drilling
- ✅ **API Abstraction** — Clean service file separation (`groqService.js`) for keeping API logic distinct from UI components
- ✅ **Markdown Rendering** — Custom rendering implementations handling structured AI text, bullet points, and code snippets correctly
- ✅ **Responsive Layouts** — Implementation of conditional mobile rendering and a hamburger menu using Tailwind CSS
- ✅ **Asynchronous Operations** — Proper handling of API promises, async/await functionality, and error catching
- ✅ **Conditional Rendering** — Polished loading indicators (TypingIndicator) and empty-state placeholders

---

## 👨💻 Author

**Nanda Kishore**
- GitHub: [@nandakishorebuild] (https://github.com/nandakishorebuild)
- Live: [https://ai-chats-omega.vercel.app]

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
