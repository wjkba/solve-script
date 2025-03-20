import { getAllChallenges } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const challenges = getAllChallenges();
    if (!challenges) {
      return NextResponse.json(
        { error: "challenges not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(challenges);
  } catch (error) {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
