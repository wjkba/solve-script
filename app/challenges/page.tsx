"use client";
import ChallengeCard from "@/components/ChallengeCard";
import ChallengesFilter from "@/components/ChallengesFilter";
import { type Challenge } from "@/types/types";
import { useEffect, useState } from "react";

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  useEffect(() => {
    async function fetchChallenges() {
      const response = await fetch("/api/challenges");
      const data = await response.json();
      setChallenges(data);
    }

    fetchChallenges();
  }, []);

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesDifficulty =
      selectedDifficulty.length === 0 ||
      selectedDifficulty.includes(challenge.difficulty);
    const matchesTopics =
      selectedTopics.length === 0 ||
      selectedTopics.some((topic) => challenge.topics.includes(topic));
    return matchesDifficulty && matchesTopics;
  });

  return (
    <div className="lg:flex lg:gap-16">
      <div className="lg:order-2">
        <ChallengesFilter
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          selectedTopics={selectedTopics}
          setSelectedTopics={setSelectedTopics}
        />
      </div>

      <div className="w-full lg:max-w-[80%]">
        <input
          className="mb-4 w-full rounded bg-[#2c2c2c] p-4 text-lg text-white"
          type="search"
          placeholder="Search"
        />
        <div className="flex flex-col gap-2">
          {filteredChallenges.map((challenge: Challenge) => (
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
    </div>
  );
}
