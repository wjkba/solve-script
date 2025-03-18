import Link from "next/link";
import slugify from "slugify";

interface ChallengeCardProps {
  title: string;
  slug: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const colors = {
  Easy: "#00c853",
  Medium: "#ff9800",
  Hard: "#f44336",
};

export default function ChallengeCard({
  title,
  slug,
  description,
  difficulty,
}: ChallengeCardProps) {
  const difficultyColor = colors[difficulty];

  return (
    <Link href={`/challenges/${slug}`}>
      <div className="rounded bg-[#323234] px-4 py-4">
        <div className="mb-2 flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: difficultyColor }}
          ></div>
          <h3 className="text-lg text-white">{title}</h3>
        </div>
        <p className="text-overflow-ellipsis max-w-[592px] overflow-hidden whitespace-nowrap">
          {description}
        </p>
      </div>
    </Link>
  );
}
