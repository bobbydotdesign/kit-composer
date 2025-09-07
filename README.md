# Chat Composer Component

A powerful, feature-rich chat interface component built with React, TypeScript, and Tailwind CSS. Perfect for AI applications, chatbots, and conversational interfaces.

![Chat Composer Preview](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-09-06%20at%2013.43.21%402x-R7GjMpzJzPHA4pgH7hxNV5whQGZMch.png)

## ✨ Features

- **Slash Commands** - Quick access to predefined actions with `/` prefix
- **Saved Prompts** - Store and reuse frequently used prompts
- **File Upload** - Drag & drop or click to upload multiple files
- **Model Selection** - Choose between different AI models
- **Web Search Toggle** - Enable/disable web search functionality
- **Deep Reasoning** - Advanced reasoning mode for complex queries
- **Prompt Enhancement** - Automatically improve prompts for better results
- **Loading States** - Visual feedback during processing
- **Mobile Responsive** - Optimized for all screen sizes
- **Accessibility** - Full keyboard navigation and screen reader support

## 🚀 Quick Start

### Installation

1. **Download the component package** from the [releases page](https://github.com/yourusername/chat-composer/releases)
2. **Extract the files** to your project directory
3. **Install dependencies**:

\`\`\`bash
npm install lucide-react class-variance-authority clsx tailwind-merge
\`\`\`

4. **Install shadcn/ui components**:

\`\`\`bash
npx shadcn@latest add button textarea dropdown-menu tooltip
\`\`\`

### Basic Usage

\`\`\`tsx
import { ChatComposer } from './components/chat-composer'

function App() {
  const handleSend = (message: string, files?: File[], deepReasoning?: boolean, webSearch?: boolean, model?: string) => {
    console.log('Message:', message)
    console.log('Files:', files)
    console.log('Deep Reasoning:', deepReasoning)
    console.log('Web Search:', webSearch)
    console.log('Model:', model)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ChatComposer
        onSend={handleSend}
        placeholder="Ask me anything..."
        allowFiles={true}
        maxFiles={5}
      />
    </div>
  )
}
\`\`\`

## 📋 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSend` | `(message: string, files?: File[], deepReasoning?: boolean, webSearch?: boolean, model?: string) => void` | **Required** | Callback when user sends a message |
| `placeholder` | `string` | `"You know what to do..."` | Placeholder text for the input |
| `disabled` | `boolean` | `false` | Disable the entire component |
| `allowFiles` | `boolean` | `true` | Enable/disable file upload functionality |
| `acceptedFileTypes` | `string` | `"image/*,.pdf,.doc,.docx,.txt"` | Accepted file types for upload |
| `maxFiles` | `number` | `5` | Maximum number of files that can be uploaded |
| `className` | `string` | `undefined` | Additional CSS classes |

## 🎨 Customization

### Slash Commands

Modify the `SLASH_COMMANDS` array to add your own commands:

\`\`\`tsx
const SLASH_COMMANDS = [
  {
    id: "custom-command",
    title: "/custom",
    description: "Your custom command",
    icon: YourIcon,
    action: "Custom action text that gets inserted",
  },
  // ... existing commands
]
\`\`\`

### Saved Prompts

Customize the `SAVED_PROMPTS` array:

\`\`\`tsx
const SAVED_PROMPTS = [
  {
    id: "custom-prompt",
    title: "Custom Prompt",
    description: "Your custom prompt description",
    prompt: "Your custom prompt text here...",
  },
  // ... existing prompts
]
\`\`\`

### Models

Update the `AVAILABLE_MODELS` array:

\`\`\`tsx
const AVAILABLE_MODELS = [
  { id: "gpt-4", name: "GPT-4", description: "Most capable model" },
  { id: "gpt-3.5", name: "GPT-3.5", description: "Fast and efficient" },
  // ... your models
]
\`\`\`

## 🎯 Advanced Usage

### With State Management

\`\`\`tsx
import { useState } from 'react'
import { ChatComposer } from './components/chat-composer'

function ChatApp() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async (message, files, deepReasoning, webSearch, model) => {
    setIsLoading(true)
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: message, files }])
    
    try {
      // Your API call here
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, deepReasoning, webSearch, model })
      })
      
      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        {/* Render your messages here */}
      </div>
      <ChatComposer
        onSend={handleSend}
        disabled={isLoading}
      />
    </div>
  )
}
\`\`\`

## 🛠 Requirements

- React 18+
- TypeScript 4.5+
- Tailwind CSS 3.0+
- shadcn/ui components

## 📦 Dependencies

\`\`\`json
{
  "lucide-react": "^0.263.1",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^1.14.0"
}
\`\`\`

## 🎨 Styling

The component uses Tailwind CSS and follows the shadcn/ui design system. Make sure you have the following in your `tailwind.config.js`:

\`\`\`js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // ... your content paths
  ],
  theme: {
    extend: {
      // shadcn/ui theme configuration
    },
  },
  plugins: [],
}
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use in your projects!

## 🙋‍♂️ Support

- Create an [issue](https://github.com/yourusername/chat-composer/issues) for bug reports
- Join our [discussions](https://github.com/yourusername/chat-composer/discussions) for questions
- Check out more components at [GetKit.design](https://getkit.design)

---

Built with ❤️ by [Bobby](https://bobby.design)
