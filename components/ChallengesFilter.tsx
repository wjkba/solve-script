"use client";
import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
const TOPICS = [
  "Algorithms",
  "Arrays",
  "Math",
  "Loops",
  "Recursion",
  "Strings",
];

interface ChallengesFilterProps {
  selectedDifficulty: string[];
  setSelectedDifficulty: (difficulty: string[]) => void;
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
}

export default function ChallengesFilter({
  selectedDifficulty,
  setSelectedDifficulty,
  selectedTopics,
  setSelectedTopics,
}: ChallengesFilterProps) {
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [isDekstop, setIsDekstop] = useState(false);

  useEffect(() => {
    function checkIfDesktop() {
      const desktopBreakpoint = 1024;
      setIsDekstop(window.innerWidth > desktopBreakpoint);
    }

    checkIfDesktop();

    window.addEventListener("resize", checkIfDesktop);

    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  const showFilters = isDekstop || isFilterShown;

  function handleDifficultyChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSelectedDifficulty([...selectedDifficulty, value]);
    } else {
      setSelectedDifficulty(selectedDifficulty.filter((e) => e !== value));
    }
  }

  function handleTopicChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSelectedTopics([...selectedTopics, value]);
    } else {
      setSelectedTopics(selectedTopics.filter((e) => e !== value));
    }
  }

  function Filters() {
    return (
      <div className="flex flex-col gap-6">
        <form>
          <p className="font-medium">STATUS:</p>
          <InputBox
            type="radio"
            id="all"
            value="all"
            name="status"
            defaultChecked
            label="All"
          />

          <InputBox
            type="radio"
            id="solved"
            value="solved"
            name="status"
            label="Solved"
          />

          <InputBox
            type="radio"
            id="unsolved"
            value="unsolved"
            name="status"
            label="Unsolved"
          />
        </form>
        <form>
          <p className="font-medium">DIFFICULTY:</p>
          <InputBox
            type="checkbox"
            id="easy"
            value="Easy"
            name="difficulty"
            label="Easy"
            onChange={handleDifficultyChange}
            checked={selectedDifficulty.includes("Easy")}
          />
          <InputBox
            type="checkbox"
            id="medium"
            value="Medium"
            name="difficulty"
            label="Medium"
            onChange={handleDifficultyChange}
            checked={selectedDifficulty.includes("Medium")}
          />
          <InputBox
            type="checkbox"
            id="hard"
            value="Hard"
            name="difficulty"
            label="Hard"
            onChange={handleDifficultyChange}
            checked={selectedDifficulty.includes("Hard")}
          />
        </form>
        <form>
          <p className="font-medium">TOPICS:</p>
          {TOPICS.map((topic) => (
            <InputBox
              key={topic}
              type="checkbox"
              id={topic}
              value={topic}
              name="topic"
              label={topic}
              onChange={handleTopicChange}
              checked={selectedTopics.includes(topic)}
            />
          ))}
        </form>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsFilterShown(!isFilterShown)}
        className="lg:hidden"
      >
        toggle filters
      </button>
      {showFilters && <Filters />}
    </div>
  );
}
