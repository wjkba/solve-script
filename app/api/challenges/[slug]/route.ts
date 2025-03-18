import { getChallengeBySlug } from "@/app/database/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const challenge = getChallengeBySlug(params.slug);
    if (!challenge) {
      return NextResponse.json(
        { error: "challenge not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(challenge);
  } catch (error) {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
