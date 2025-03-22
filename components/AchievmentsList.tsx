import { Achievement } from "@/types/types";
import AchievementCard from "./AchievementCard";

interface AchievementListProps {
  achievements: Achievement[];
}

export default function AchievmentsList({
  achievements,
}: AchievementListProps) {
  const achievementCount = achievements.length;
  const hiddenCount = 4 - achievementCount;

  const AchievementCards = achievements.map((achievement, i) => (
    <AchievementCard key={i} text={achievement.title} />
  ));

  for (let i = 0; i < hiddenCount; i++) {
    AchievementCards.push(
      <AchievementCard key={`hidden-${i}`} hidden={true} />,
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 sm:flex-nowrap md:hidden">
        {AchievementCards.slice(0, 3)}
      </div>
      <div className="hidden gap-4 md:flex">{AchievementCards.slice(0, 4)}</div>
    </>
  );
}
