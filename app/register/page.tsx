"use client";
import ButtonPrimary from "@/components/ButtonPrimary";
import Input from "@/components/Input";
import Link from "next/link";
import { FormEvent, useState } from "react";

// TODO: Auth, registration

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      console.log(formData);
      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      const data = await response.json();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-full max-w-[450px]">
        <h1 className="mb-8 w-full text-center text-3xl">
          Create your account
        </h1>
        <form onSubmit={onSubmit}>
          <div className="mb-4 flex flex-col gap-2">
            <Input
              name="username"
              id="username"
              placeholder="Username"
              type="text"
              required
            />
            <Input
              name="password"
              id="password"
              placeholder="Password"
              type="password"
              required
            />
            <Input
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              required
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <ButtonPrimary type="submit" className="w-full">
              Register
            </ButtonPrimary>
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
