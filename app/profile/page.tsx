// TODO: Profil

import { getSession, logout } from "@/actions/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getSession();
  console.log(session);
  if (!session.isLoggedIn) redirect("/login");

  if (session.isLoggedIn) {
    return (
      <div>
        <p>logged in</p>
        <button className="bg-black p-4" onClick={logout}>
          {" "}
          logout
        </button>
      </div>
    );
  }

  return <></>;
}
