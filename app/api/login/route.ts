import { loginUser } from "@/actions/auth";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const formData = await req.formData();
    const result = await loginUser(formData);
    return result;
  } catch (error) {
    console.log("🚀 ~ PUT ~ error:", error);
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
