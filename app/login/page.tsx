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
        <div className="mb-6 rounded-md border border-[#F7DF1E] p-4">
          <p className="mb-1 text-lg font-medium">Demo Account:</p>
          <p>
            Username: <span>testuser</span>
          </p>
          <p>
            Password: <span>12345</span>
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
