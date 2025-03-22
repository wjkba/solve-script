// TODO: Profil

import { getSession, logout } from "@/actions/auth";
import AchievementCard from "@/components/AchievementCard";
import AchievmentsList from "@/components/AchievmentsList";
import ChallengeCard from "@/components/ChallengeCard";
import {
  getAchievementsByIds,
  getUserAchievementIds,
  getUserCompletedChallenges,
} from "@/lib/db";
import { redirect } from "next/navigation";

//TODO: fix level

export default async function ProfilePage() {
  const session = await getSession();
  const { isLoggedIn, username, xp, userId } = session;
  if (!isLoggedIn) redirect("/login");
  const achievementIds = userId ? getUserAchievementIds(userId) : [];
  const achievements = getAchievementsByIds(achievementIds) || [];
  const userCompletedChallenges = userId
    ? getUserCompletedChallenges(userId)
    : [];

  function getLevelInfo(xp = 0) {
    const level = Math.floor(Math.sqrt(xp / 25)) + 1;
    const currentLevelXP = (level - 1) * (level - 1) * 25;
    const nextLevelXP = level * level * 25;
    const progress =
      ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

    return {
      level,
      currentXP: xp,
      nextLevelXP,
      progress: Math.min(100, Math.max(0, progress)),
    };
  }

  const levelInfo = getLevelInfo(xp);

  if (isLoggedIn) {
    return (
      <div className="flex flex-col gap-16">
        <section id="profile-info">
          <div className="flex max-w-[36rem] items-center gap-6">
            <img
              src={`https://ui-avatars.com/api/?name=${username}`}
              alt="avatar"
              className="min-w-36 rounded-md"
            />
            <div className="w-full">
              <div className="flex items-start justify-between">
                <p className="mb-4 text-3xl">{username}</p>
                <button
                  className="cursor-pointer text-neutral-300"
                  onClick={logout}
                >
                  logout
                </button>
              </div>

              <div className="mb-3 max-w-fit rounded-md bg-[#323234] px-3 py-2">
                Level {levelInfo.level}
              </div>

              <div className="flex flex-col gap-2">
                <div className="min-h-2 w-full min-w-1 rounded bg-[#3F3F41]">
                  <div
                    style={{ maxWidth: levelInfo.progress + "%" }}
                    className="min-h-2 w-full min-w-1 rounded bg-[#facc15]"
                  ></div>
                </div>
                <p>
                  ({levelInfo.currentXP}/{levelInfo.nextLevelXP} XP)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements">
          <h1 className="mb-4 text-xl">Achievements</h1>
          <AchievmentsList achievements={achievements} />
        </section>

        <section id="completed-exercises">
          <h1 className="mb-4 text-xl">Solved challenges</h1>
          <div className="flex flex-col gap-2">
            {userCompletedChallenges.length <= 0 && (
              <p className="pl-4 text-neutral-400">
                Start solving challenges to build your collection here
              </p>
            )}
            {userCompletedChallenges.map((challenge, id) => (
              <ChallengeCard
                description={challenge.description}
                difficulty={challenge.difficulty}
                slug={challenge.slug}
                title={challenge.title}
                key={challenge.id}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }

  return <></>;
}
