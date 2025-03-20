import { getAllChallenges } from "@/app/database/db";
import { NextResponse } from "next/server";

export async function PUT() {
  try {
    return NextResponse.json(challenges);
  } catch (error) {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
