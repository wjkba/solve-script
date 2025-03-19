"use client";
import { Challenge, TestResult } from "@/types/types";
import ChallengeInfo from "./ChallengeInfo";
import { useState } from "react";
import ResultsInfo from "./ResultsInfo";

interface EditorInfoPanelProps {
  challenge: Challenge;
  results: TestResult[] | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  errorMessage: null | string;
}

export default function EditorInfoPanel({
  challenge,
  results,
  activeTab,
  setActiveTab,
  errorMessage,
}: EditorInfoPanelProps) {
  function TabButton({ id, label }: { id: string; label: string }) {
    const isActive = activeTab === id;
    return (
      <button
        onClick={() => setActiveTab(id)}
        className={`cursor-pointer border-b-2 px-4 py-3 text-center ${
          isActive ? "border-b-[#E1CB1B]" : "border-b-transparent"
        }`}
        type="button"
      >
        {label}
      </button>
    );
  }
  return (
    <div>
      <div className="flex gap-2 border-b border-b-[#626266]">
        <TabButton id="info" label="Instructions" />
        <TabButton id="results" label="Results" />
      </div>

      <div className="rounded bg-[#252526] p-6">
        {activeTab === "info" && <ChallengeInfo challenge={challenge} />}
        {activeTab === "results" && (
          <ResultsInfo results={results} errorMessage={errorMessage} />
        )}
      </div>
    </div>
  );
}
