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
