import ButtonPrimary from "@/components/ButtonPrimary";
import Input from "@/components/Input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-full max-w-[450px]">
        <h1 className="mb-4 w-full text-center text-3xl">
          Create your account
        </h1>
        <form>
          <div className="mb-4 flex flex-col gap-2">
            <Input
              name="username"
              id="username"
              placeholder="Username"
              type="text"
            />
            <Input
              name="password"
              id="password"
              placeholder="Password"
              type="password"
            />
            <Input
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              type="password"
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <ButtonPrimary className="w-full">Register</ButtonPrimary>
            <p>
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-400 transition-colors hover:text-blue-800"
              >
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
