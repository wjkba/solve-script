import { TestResult } from "@/types/types";
import ButtonPrimary from "./ButtonPrimary";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface ChallengeInfoProps {
  results: TestResult[] | null;
  errorMessage: null | string;
  challengeSlug: string;
}

function Result({ result }: { result: TestResult }) {
  const borderColor = result.passed ? "border-green-500" : "border-red-700";
  return (
    <div
      className={`grid gap-1 rounded border text-sm ${borderColor} bg-[#1E1E1E] p-4`}
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
  challengeSlug,
}: ChallengeInfoProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!results) {
    return <p>Run code to get the results</p>;
  }

  let failed = 0;
  for (let test of results) {
    if (!test.passed) failed++;
  }

  async function handleSubmit() {
    console.log("DSOIJAODJAS");
    if (failed > 0 || !challengeSlug) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await axios.put("/api/submit-challenge", {
        slug: challengeSlug,
      });
      router.push(`/profile`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.error || "Failed to submit solution";
        setSubmitError(errorMessage);
      } else {
        setSubmitError("An error occurred while submitting your solution");
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="mb-6 flex flex-col gap-2">
        {results.map((result, i) => (
          <Result result={result} key={i} />
        ))}
      </div>
      {failed <= 0 && (
        <div>
          <ButtonPrimary
            className="mb-2"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit solution"}
          </ButtonPrimary>

          {submitError && (
            <p className="mt-2 text-sm text-red-500">{submitError}</p>
          )}
        </div>
      )}
    </div>
  );
}
