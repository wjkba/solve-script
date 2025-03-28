import { getSession } from "@/actions/auth";
import RegisterForm from "@/components/RegisterForm";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await getSession();
  if (session.isLoggedIn) redirect("/profile");

  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-full max-w-[450px]">
        <h1 className="mb-8 w-full text-center text-3xl">
          Create your account
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
}
