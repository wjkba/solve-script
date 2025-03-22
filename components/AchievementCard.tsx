import React from "react";
import { VscCheck } from "react-icons/vsc";
import { VscQuestion } from "react-icons/vsc";
import { VscStarFull } from "react-icons/vsc";

const icons = {
  star: <VscStarFull size={40} />,
  check: <VscCheck size={40} />,
};

type IconKey = keyof typeof icons;

interface AchievementCardProps {
  icon?: IconKey;
  text?: string;
  hidden?: boolean;
}

export default function AchievementCard({
  text = "Achievement",
  icon = "check",
  hidden = false,
}: AchievementCardProps) {
  if (hidden) {
    return (
      <div className="flex min-h-48 w-full flex-col items-center justify-center gap-3 rounded-md bg-neutral-800 p-4 text-zinc-500">
        <VscQuestion size={40} />
        <div className="min-h-6 w-[50%] rounded bg-gradient-to-r from-zinc-600 to-neutral-600"></div>
      </div>
    );
  }

  const iconElement = icons[icon] || icons["check"];

  return (
    <div className="flex min-h-48 w-full flex-col items-center justify-center gap-3 rounded-md bg-zinc-800 p-4 text-neutral-200">
      {iconElement}
      <p className="text-lg">{text}</p>
    </div>
  );
}
