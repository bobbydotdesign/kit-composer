"use client"
import { BookOpen } from "lucide-react"
import { Globe, Bot, Rocket, Network, Sparkles } from "lucide-react"

interface ChatComposerProps {
  onSend: (message: string, files?: File[], deepReasoning?: boolean, webSearch?: boolean, model?: string) => void
  placeholder?: string
  disabled?: boolean
  allowFiles?: boolean
  acceptedFileTypes?: string
  maxFiles?: number
  className?: string
}

const AVAILABLE_MODELS = [
  { id: "auto", name: "Auto", description: "Choose the best model based on your prompt" },
  { id: "standard", name: "Standard", description: "Balanced performance for most tasks" },
  { id: "deep", name: "Deep Reasoning", description: "Advanced reasoning for complex problems" },
]

const SLASH_COMMANDS = [
  {
    id: "agent-mode",
    title: "/agent-mode",
    description: "Get work done for you",
    icon: Bot,
    action: "Act as my personal agent and help me complete tasks efficiently.",
  },
  {
    id: "deep-research",
    title: "/deep-research",
    description: "Get a detailed report",
    icon: Rocket,
    action: "Conduct thorough research on this topic and provide a comprehensive report.",
  },
  {
    id: "use-connectors",
    title: "/use-connectors",
    description: "Search within your apps",
    icon: Network,
    action: "Search and connect information from various sources and applications.",
  },
  {
    id: "study-learn",
    title: "/study-learn",
    description: "Learn a new concept",
    icon: BookOpen,
    action: "Help me understand and learn about this topic in detail.",
  },
  {
    id: "create-image",
    title: "/create-image",
    description: "Visualize anything",
    icon: Sparkles,
    action: "Create a visual representation or image based on my description.",
  },
  {
    id: "summarize",
    title: "/summarize",
    description: "Get key points quickly",
    icon: BookOpen,
    action: "Summarize the main points and key takeaways from this content.",
  },
  {
    id: "translate",
    title: "/translate",
    description: "Convert to another language",
    icon: Globe,
    action: "Translate this text to another language.",
  },
  {
    id: "code-review",
    title: "/code-review",
    description: "Analyze and improve code",
    icon: Bot,
    action: "Review this code and provide suggestions for improvement.",
  },
  {
    id: "brainstorm",
    title: "/brainstorm",
    description: "Generate creative ideas",
    icon: Sparkles,
    action: "Help me brainstorm creative ideas and solutions for this topic.",
  },
]

const SAVED_PROMPTS = [
  {
    id: "meeting-summary",
    title: "Meeting Summary",
    description: "Summarize key points from a meeting",
    prompt: "Please summarize the key points, decisions made, and action items from the following meeting:",
  },
  {
    id: "email-draft",
    title: "Professional Email",
    description: "Draft a professional email",
    prompt: "Help me draft a professional email with the following details:",
  },
  {
    id: "code-explanation",
    title: "Code Explanation",
    description: "Explain how code works",
    prompt:
      "Please explain how this code works, including its purpose, key components, and any potential improvements:",
  },
  {
    id: "brainstorm-ideas",
    title: "Brainstorm Ideas",
    description: "Generate creative solutions",
    prompt: "Help me brainstorm creative ideas and solutions for:",
  },
  {
    id: "research-topic",
    title: "Research Topic",
    description: "Research a specific topic",
    prompt:
      "Please provide comprehensive research on the following topic, including key facts, recent developments, and different perspectives:",
  },
]

export function ChatComposer({
  onSend,
  placeholder = "You know what to do...",
  disabled = false,
  allowFiles = true,
  acceptedFileTypes = "image/*,.pdf,.doc,.docx,.txt",
  maxFiles = 5,
  className,
}: ChatComposerProps) {}
