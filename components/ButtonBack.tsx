"use client";
import ButtonSecondary from "./ButtonSecondary";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <ButtonSecondary type="button" onClick={handleGoBack}>
      Go Back
    </ButtonSecondary>
  );
}
