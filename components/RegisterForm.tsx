"use client";
import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";
import Input from "./Input";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(5, "Password must be at least 5 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterFormData) {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    const response = await fetch("/api/register", {
      method: "PUT",
      body: formData,
    });

    const responseData = await response.json();
    if (response.ok) router.push("/login");
    else setServerError(responseData.error);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex flex-col gap-2">
        <div>
          <Input
            {...register("username")}
            id="username"
            placeholder="Username"
            type="text"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-500">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <Input
            {...register("password")}
            id="password"
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <Input
            {...register("confirmPassword")}
            id="confirmPassword"
            placeholder="Confirm Password"
            type="password"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      {serverError && (
        <p className="mb-4 text-sm text-red-500">{serverError}</p>
      )}

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
