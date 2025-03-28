import { Achievement, Challenge } from "@/types/types";
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

export function getUserAchievementIds(userId: number) {
  if (!userId) return [];
  const { achievements } = db
    .prepare("SELECT achievements FROM users WHERE id = ?")
    .get(userId) as { achievements: string };

  return JSON.parse(achievements || "[]");
}

export function getAchievementsByIds(achievementIds: number[]) {
  if (achievementIds.length <= 0) return null;
  const placeholders = achievementIds.map(() => "?").join(",");
  return db
    .prepare(`SELECT * FROM achievements WHERE id IN (${placeholders})`)
    .all(...achievementIds) as Achievement[];
}

export function getUserCompletedChallenges(userId: number) {
  if (!userId) return [];
  const { completed_challenges } = db
    .prepare("SELECT completed_challenges FROM users WHERE id = ?")
    .get(userId) as { completed_challenges: string };
  const completedChallengesIds = JSON.parse(completed_challenges);
  const placeholders = completedChallengesIds.map(() => "?").join(",");
  return db
    .prepare(`SELECT * FROM challenges WHERE id IN (${placeholders})`)
    .all(...completedChallengesIds) as Challenge[];
}

export function getUserXP(userId: number) {
  if (!userId) return 0;
  const { xp } = db
    .prepare("SELECT xp FROM users WHERE id = ?")
    .get(userId) as { xp: number };
  console.log(xp);
  return xp;
}

export function addCompletedChallenge(challengeId: number, userId: number) {
  if (!challengeId || !userId) return;
  const { completed_challenges } = db
    .prepare("SELECT completed_challenges FROM users WHERE id = ?")
    .get(userId) as { completed_challenges: string };

  const completedChallenges = JSON.parse(completed_challenges || "[]");
  if (completedChallenges.includes(challengeId)) {
    return null;
  }

  completedChallenges.push(challengeId);

  return db
    .prepare("UPDATE users SET completed_challenges = ? WHERE id = ?")
    .run(JSON.stringify(completedChallenges), userId);
}

export function getChallengeIdBySlug(slug: string) {
  if (!slug) return null;
  const { id } = db
    .prepare("SELECT id FROM challenges WHERE slug = ?")
    .get(slug) as { id: number };
  return id;
}
