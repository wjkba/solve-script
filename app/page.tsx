import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <div className="mb-4 flex flex-col gap-2">
          <p className="text-white text-4xl">
            Learn by Solving Coding Problems
          </p>
          <p>
            Work on JavaScript-based challenges. Get instant feedback on your
            code and track your progress as you improve.
          </p>
        </div>
        <div className="flex  gap-2 max-w-[20rem]">
          <ButtonPrimary>
            <Link href={"/register"}>Sign Up</Link>
          </ButtonPrimary>
          <ButtonSecondary>
            <Link href={"/exercises"}>View Exercises</Link>
          </ButtonSecondary>
        </div>
      </section>
    </div>
  );
}
