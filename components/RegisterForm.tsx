"use client";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";
import Input from "./Input";
import { FormEvent } from "react";

// TODO: Display errors
// TODO: if response is 200 then redirect to /login

export default function RegisterForm() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/register", {
      method: "PUT",
      body: formData,
    });

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
  );
}
