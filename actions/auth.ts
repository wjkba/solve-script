"use server";

import { getHashedPassword, getUserId, insertUser } from "@/lib/db";
import { defaultSession, SessionData, sessionOptions } from "@/lib/session";
import bcrypt from "bcryptjs";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function getSession() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions,
  );
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export async function registerUser(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!username || !password || !confirmPassword) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (password !== confirmPassword)
    return NextResponse.json(
      { error: "Passwords do not match" },
      { status: 400 },
    );

  const existingUser = getUserId(username);
  if (existingUser)
    return NextResponse.json(
      { error: "Username already exists" },
      { status: 400 },
    );

  const hashedPassword = await bcrypt.hash(password, 10);
  insertUser(username, hashedPassword);

  return NextResponse.json({ message: "OK - registered" }, { status: 200 });
}

export async function loginUser(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const existingUser = getUserId(username) as { id: number };
  if (!existingUser) {
    return NextResponse.json(
      { error: "Username does not exist" },
      { status: 400 },
    );
  }

  const passwordData = getHashedPassword(existingUser.id) as {
    password_hash: string;
  };
  const isPasswordValid = await bcrypt.compare(
    password,
    passwordData.password_hash,
  );

  if (!isPasswordValid) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const session = await getSession();

  session.isLoggedIn = true;
  session.userId = existingUser.id;
  session.username = username;

  await session.save();

  return NextResponse.json({ message: "OK - logged in" }, { status: 200 });
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect("/");
}
