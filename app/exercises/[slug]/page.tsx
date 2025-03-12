import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import React from "react";

export default function ExercisePage() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <ButtonSecondary>Go Back</ButtonSecondary>
        <ButtonPrimary>Continue in Editor</ButtonPrimary>
      </div>

      <div className="flex flex-col gap-4 p-6 bg-[#323234] rounded">
        <div>
          <h1 className="text-2xl text-white mb-4">Exercise Title</h1>
          <p>
            Given an array of numbers, return the sum of all positive numbers in
            the array. If there are no positive numbers, return 0.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-white">Input:</h2>
          <p className="indent-2">
            An array of integers (arr), where -1000 ≤ arr[i] ≤ 1000.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-white">Output:</h2>
          <p className="indent-2">
            A single integer representing the sum of all positive numbers.
          </p>
        </div>
      </div>
    </div>
  );
}
