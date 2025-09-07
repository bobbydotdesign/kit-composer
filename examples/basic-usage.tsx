import { ChatComposer } from "../components/chat-composer"

export default function BasicExample() {
  const handleSend = (
    message: string,
    files?: File[],
    deepReasoning?: boolean,
    webSearch?: boolean,
    model?: string,
  ) => {
    console.log("Message:", message)
    console.log("Files:", files)
    console.log("Deep Reasoning:", deepReasoning)
    console.log("Web Search:", webSearch)
    console.log("Model:", model)

    // Here you would typically send the message to your API
    // Example:
    // await fetch('/api/chat', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message, deepReasoning, webSearch, model })
    // })
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Chat Composer Example</h1>
      <ChatComposer onSend={handleSend} placeholder="Ask me anything..." allowFiles={true} maxFiles={5} />
    </div>
  )
}
