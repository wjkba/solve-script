"use client";
import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
const TOPICS = ["Algorithms", "Arrays", "Math", "Loops", "Recursion"];

export default function ExercisesFilter() {
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
            value="easy"
            name="difficulty"
            label="Easy"
          />
          <InputBox
            type="checkbox"
            id="medium"
            value="medium"
            name="difficulty"
            label="Medium"
          />
          <InputBox
            type="checkbox"
            id="hard"
            value="hard"
            name="difficulty"
            label="Hard"
          />
        </form>
        <form>
          <p className="font-medium">TOPICS:</p>
          {TOPICS.map((topic) => (
            <InputBox
              key={topic}
              type="checkbox"
              id={topic.toLowerCase()}
              value={topic.toLowerCase()}
              name="topic"
              label={topic}
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
