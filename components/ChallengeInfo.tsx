import { Challenge } from "@/types/types";
import React from "react";

interface ChallengeInfoProps {
  challenge: Challenge;
}

export default function ChallengeInfo({ challenge }: ChallengeInfoProps) {
  console.log(challenge);
  const examples = JSON.parse(challenge.examples);
  const constraints = JSON.parse(challenge.constraints);
  console.log(examples);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="mb-4 text-2xl text-white">{challenge.title}</h1>
        <p>{challenge.description}</p>
      </div>

      <div>
        <h2 className="mb-2 text-white">Input:</h2>
        <p className="indent-2">{challenge.input_format}</p>
      </div>

      <div>
        <h2 className="mb-2 text-white">Output:</h2>
        <p className="indent-2">{challenge.output_format}</p>
      </div>

      <div>
        <h2 className="mb-2 text-white">Examples:</h2>
        <div className="code-block">
          <ul>
            {examples.map((example: string, i: number) => (
              <li key={i}>{example}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-white">Constraints:</h2>
        <ul className="list-disc pl-6">
          {constraints.map((constraint: string, i: number) => (
            <li key={i}>{constraint}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
