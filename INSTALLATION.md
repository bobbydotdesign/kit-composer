# Installation Guide

## Step 1: Download the Component

Download the latest release from GitHub or copy the files from this package.

## Step 2: Install Dependencies

\`\`\`bash
npm install lucide-react class-variance-authority clsx tailwind-merge
\`\`\`

## Step 3: Install shadcn/ui Components

If you don't have shadcn/ui set up in your project:

\`\`\`bash
npx shadcn@latest init
\`\`\`

Then install the required components:

\`\`\`bash
npx shadcn@latest add button textarea dropdown-menu tooltip
\`\`\`

## Step 4: Copy Files

Copy these files to your project:

- `components/chat-composer.tsx` → Your components directory
- `lib/utils.ts` → Your lib directory (if you don't have it already)

## Step 5: Update Your Tailwind Config

Make sure your `tailwind.config.js` includes the component files:

\`\`\`js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // ... your other paths
  ],
  // ... rest of config
}
\`\`\`

## Step 6: Use the Component

\`\`\`tsx
import { ChatComposer } from './components/chat-composer'

function App() {
  const handleSend = (message, files, deepReasoning, webSearch, model) => {
    // Handle the message
    console.log({ message, files, deepReasoning, webSearch, model })
  }

  return <ChatComposer onSend={handleSend} />
}
\`\`\`

## Troubleshooting

### Missing Icons
If you see missing icons, make sure `lucide-react` is installed:
\`\`\`bash
npm install lucide-react
\`\`\`

### Styling Issues
Ensure Tailwind CSS is properly configured and the component files are included in your content paths.

### TypeScript Errors
Make sure you have the latest TypeScript version and all type dependencies installed.
