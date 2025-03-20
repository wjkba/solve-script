import { getSession } from "@/actions/auth";
import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getSession();
  if (session.isLoggedIn) redirect("/profile");

  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-full max-w-[450px]">
        <h1 className="mb-8 w-full text-center text-3xl">
          Log in to your account
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
