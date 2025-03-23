import { getSession } from "@/actions/auth";
import { addCompletedChallenge, getChallengeIdBySlug } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

// Temporary solution, can be easily cheated

export async function PUT(req: NextRequest) {
  try {
    const session = await getSession();
    const { isLoggedIn, userId } = session;

    if (!isLoggedIn || !userId) {
      return NextResponse.json(
        { error: "You must be logged in to submit a challenge" },
        { status: 401 },
      );
    }

    const body = await req.json();
    const { slug } = body;

    const challengeId = getChallengeIdBySlug(slug);

    if (!challengeId) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 },
      );
    }

    addCompletedChallenge(challengeId, userId);
    return NextResponse.json({ message: "OK - submitted" }, { status: 200 });
  } catch (error) {
    console.log("🚀 ~ PUT ~ error:", error);
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
