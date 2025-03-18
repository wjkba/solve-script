import { getChallengeBySlug } from "@/app/database/db";
import BackButton from "@/components/ButtonBack";
import ButtonPrimary from "@/components/ButtonPrimary";
import ChallengeInfo from "@/components/ChallengeInfo";
import { Challenge } from "@/types/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function ChallengePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const challenge: Challenge = getChallengeBySlug(slug);
  if (!challenge) {
    notFound();
  }

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <BackButton />
        <ButtonPrimary>
          <Link href={"/challenges/1/editor"}>Continue in Editor</Link>
        </ButtonPrimary>
      </div>
      <div className="rounded bg-[#323234] p-6">
        <ChallengeInfo challenge={challenge} />
      </div>
    </div>
  );
}
