import React from "react";
import { VscCheck } from "react-icons/vsc";

interface AchievementCardProps {
  text: string;
}

export default function AchievementCard({ text }: AchievementCardProps) {
  return (
    <div className="flex min-h-48 w-full flex-col items-center justify-center gap-4 rounded-md bg-zinc-800 p-4 text-neutral-200">
      <VscCheck size={32} />
      <p className="text-xl">{text}</p>
    </div>
  );
}
