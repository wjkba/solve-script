import BackButton from "@/components/ButtonBack";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import ExerciseInfo from "@/components/ExerciseInfo";
import Link from "next/link";
import React from "react";

export default function ExercisePage() {
  return (
    <div>
      <div className="mb-4 flex justify-between">
        <BackButton />
        <ButtonPrimary>
          <Link href={"/exercises/1/editor"}>Continue in Editor</Link>
        </ButtonPrimary>
      </div>
      <div className="rounded bg-[#323234] p-6">
        <ExerciseInfo />
      </div>
    </div>
  );
}
