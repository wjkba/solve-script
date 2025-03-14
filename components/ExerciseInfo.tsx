import React from "react";

export default function ExerciseInfo() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="mb-4 text-2xl text-white">Exercise Title</h1>
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

      <div>
        <h2 className="mb-2 text-white">Examples:</h2>
        <div className="code-block">
          <ul>
            <li>sumPositive([1, -4, 7, 12]); // ➞ 20 (1 + 7 + 12)</li>
            <li>sumPositive([-1, -2, -3]); // ➞ 0 (No positive numbers)</li>
            <li>sumPositive([0, 5, 10, -10]); // ➞ 15 (5 + 10)</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-white">Constraints:</h2>
        <ul>
          <li>Do not use built-in functions like filter() or reduce().</li>
          <li>The function should handle empty arrays by returning 0.</li>
        </ul>
      </div>
    </div>
  );
}
