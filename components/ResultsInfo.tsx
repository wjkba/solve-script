import { TestResult } from "@/types/types";

interface ChallengeInfoProps {
  results: TestResult[] | null;
  errorMessage: null | string;
}

function Result({ result }: { result: TestResult }) {
  const borderColor = result.passed ? "border-green-500" : "border-red-700";
  return (
    <div
      className={`grid gap-2 rounded border text-sm ${borderColor} bg-[#1E1E1E] p-4`}
    >
      <p>Input: {result.input}</p>
      <p>Output: {result.output}</p>
      <p>Expected: {result.expected}</p>
    </div>
  );
}

export default function ResultsInfo({
  results,
  errorMessage,
}: ChallengeInfoProps) {
  if (!results) {
    return <p>Run code to get the results</p>;
  }

  let failed = 0;
  for (let test of results) {
    if (!test.passed) failed++;
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl text-white">Results</h1>
      {errorMessage && (
        <p className="mb-3 text-red-500">Error: {errorMessage}</p>
      )}
      {failed > 0 && <p className="mb-3 text-red-500">Failed: {failed}</p>}
      {failed <= 0 && (
        <p className="mb-4 text-green-500">You passed all the tests</p>
      )}
      <div className="flex flex-col gap-2">
        {results.map((result, i) => (
          <Result result={result} key={i} />
        ))}
      </div>
    </div>
  );
}
