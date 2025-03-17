import BackButton from "@/components/ButtonBack";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import ChallengeInfo from "@/components/ChallengeInfo";
import Link from "next/link";
import React from "react";

export default function ChallengePage() {
  return (
    <div>
      <div className="mb-4 flex justify-between">
        <BackButton />
        <ButtonPrimary>
          <Link href={"/challenges/1/editor"}>Continue in Editor</Link>
        </ButtonPrimary>
      </div>
      <div className="rounded bg-[#323234] p-6">
        <ChallengeInfo />
      </div>
    </div>
  );
}
