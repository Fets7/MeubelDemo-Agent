"use client";

import { Chat } from "@openai/chatkit";
import type { ChatKitOptions } from "@openai/chatkit";

const options: ChatKitOptions = {
  api: {
    url: "/api/chat",
  },
  theme: {
    colorScheme: "light",
    density: "compact", // compacter design
    radius: "md",
    typography: {
      baseSize: 14, // kleiner font
    },
    color: {
      accent: {
        primary: "#3b82f6", // Fesi-AI blauw
      },
    },
  },
  composer: {
    attachments: { enabled: false },
  },
  startScreen: {
    greeting: "Waar kan ik je vandaag mee helpen?",
    prompts: [],
  },
};

export default function App() {
  return <Chat options={options} />;
}
