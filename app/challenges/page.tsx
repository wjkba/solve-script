"use client";
import ChallengeCard from "@/components/ChallengeCard";
import ChallengesFilter from "@/components/ChallengesFilter";
import { type Challenge } from "@/types/types";
import { useEffect, useState } from "react";

function Skeleton() {
  return <div className="h-full animate-pulse rounded-md bg-neutral-800 p-4" />;
}

export default function ChallengesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function fetchChallenges() {
      setIsLoading(true);
      try {
        const response = await fetch("/api/challenges");
        const data = await response.json();
        setChallenges(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
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
    const matchesSearch =
      searchQuery.trim() === "" ||
      challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDifficulty && matchesTopics && matchesSearch;
  });

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  // TODO: Status filter

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
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {isLoading && <Skeleton />}
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
