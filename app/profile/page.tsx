// TODO: Profil

import { getSession, logout } from "@/actions/auth";
import AchievementCard from "@/components/AchievementCard";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getSession();
  const { isLoggedIn, username, xp } = session;

  if (!isLoggedIn) redirect("/login");

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
      <div>
        <section id="profile-info">
          <div className="flex items-center gap-6">
            <img
              src={`https://ui-avatars.com/api/?name=${username}`}
              alt="avatar"
              className="min-w-36"
            />
            <div className="w-full">
              <p className="mb-4 text-3xl">{username}</p>
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

        <div className="flex items-center gap-2">
          <p>logged in</p>
          <button className="rounded bg-[#323234] px-4 py-2" onClick={logout}>
            logout
          </button>
        </div>

        <section id="achievements">
          <h1 className="mb-4 text-xl">Achievements</h1>
          <div className="flex gap-4">
            <AchievementCard text="Achievement" />
            <AchievementCard text="Achievement" />
            <AchievementCard text="Achievement" />
          </div>
        </section>

        <section id="completed-exercises"></section>
      </div>
    );
  }

  return <></>;
}
