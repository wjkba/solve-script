import BackButton from "@/components/ButtonBack";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import ExerciseInfo from "@/components/ExerciseInfo";
import React from "react";

export default function ExercisePage() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <BackButton />
        <ButtonPrimary>Continue in Editor</ButtonPrimary>
      </div>

      <ExerciseInfo />
    </div>
  );
}
