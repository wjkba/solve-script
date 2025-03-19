import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[65dvh] items-center">
      <section id="hero">
        <div className="mb-4 flex max-w-[384px] flex-col gap-2 lg:mb-8 lg:max-w-[37.5rem] lg:gap-4">
          <p className="text-4xl text-white lg:text-6xl">
            Learn by Solving Coding Problems
          </p>
          <p className="lg:text-2xl">
            Work on JavaScript-based challenges. Get instant feedback on your
            code and track your progress as you improve.
          </p>
        </div>
        <div className="flex max-w-[340px] gap-2">
          <ButtonPrimary className="w-full">
            <Link href={"/register"}>Sign Up</Link>
          </ButtonPrimary>
          <ButtonSecondary className="w-full">
            <Link href={"/challenges"}>View Challenges</Link>
          </ButtonSecondary>
        </div>
      </section>
    </div>
  );
}
