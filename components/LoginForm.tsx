"use client";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";
import Input from "./Input";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

// TODO: Display errors
// TODO: if response is 200 then redirect to /profile

export default function LoginForm() {
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/login", {
      method: "PUT",
      body: formData,
    });

    if (response.ok) router.push("/profile");
    const data = await response.json();
    console.log(data);
  }
  return (
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
      </div>

      <div className="flex flex-col items-center gap-3">
        <ButtonPrimary type="submit" className="w-full">
          Login
        </ButtonPrimary>
        <p>
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-400 transition-colors hover:text-blue-800"
          >
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}
