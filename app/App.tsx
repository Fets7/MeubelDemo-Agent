"use client";

import { Chat } from "@openai/chatkit/react";
import type { ChatKitOptions } from "@openai/chatkit";

const options: ChatKitOptions = {
  api: {
    url: "/api/chat", // standaard endpoint uit ChatKit starter
  },
  theme: {
    colorScheme: "light",
    radius: "md",
    density: "compact", // compacte layout (kleinere marges)
    typography: {
      baseSize: 14, // kleiner lettertype
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
  // ✅ geef de opties gewoon als prop door
  return <Chat options={options} />;
}
