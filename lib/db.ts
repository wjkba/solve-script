import { Challenge } from "@/types/types";
import Database from "better-sqlite3";

const db = new Database("data.db");

export function getAllChallenges() {
  return db.prepare("SELECT * FROM challenges").all() as Challenge[];
}

export function getChallengeBySlug(slug: string) {
  if (!slug) return null;
  return db
    .prepare("SELECT * FROM challenges WHERE slug = ?")
    .get(slug) as Challenge;
}

export function getUserId(username: string) {
  if (!username) return null;
  return db.prepare("SELECT id FROM users WHERE username = ?").get(username);
}

export function insertUser(username: string, hashedPassword: string) {
  if (!username || !hashedPassword) return null;
  return db
    .prepare("INSERT INTO users (username, password_hash) VALUES (?, ?)")
    .run(username, hashedPassword);
}

export function getHashedPassword(userId: number) {
  if (!userId) return null;
  return db.prepare("SELECT password_hash FROM users WHERE id = ?").get(userId);
}
