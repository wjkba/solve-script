import ChallengeCard from "@/components/ChallengeCard";
import ChallengesFilter from "@/components/ChallengesFilter";
import { getAllChallenges } from "../database/db";
import { type Challenge } from "@/types/types";

export default function ChallengesPage() {
  const challenges: Challenge[] = getAllChallenges();
  console.log(challenges);

  return (
    <div className="lg:flex lg:gap-16">
      <div className="lg:order-2">
        <ChallengesFilter />
      </div>

      <div className="w-full lg:max-w-[80%]">
        <input
          className="mb-4 w-full rounded bg-[#2c2c2c] p-4 text-lg text-white"
          type="search"
          placeholder="Search"
        />
        {challenges.map((challenge: Challenge) => (
          <ChallengeCard
            slug={challenge.slug}
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            difficulty={challenge.difficulty}
          />
        ))}
      </div>
    </div>
  );
}
