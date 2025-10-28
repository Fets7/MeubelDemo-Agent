"use client";

import { Chat } from "@openai/chatkit/react";
import type { ChatKitOptions } from "@openai/chatkit";

const options: ChatKitOptions = {
  api: {
    url: "/api/chat", // Zorgt dat het type klopt ✅
  },
  theme: {
    colorScheme: "light",
    radius: "pill",
    density: "normal",
    color: {
      accent: {
        primary: "#2900f5",
      },
    },
  },
  startScreen: {
    greeting: "Waar kan ik je vandaag mee helpen?",
    prompts: [],
  },
};

export default function Page() {
  return <Chat options={options} />;
}
