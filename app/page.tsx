import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Link from "next/link";

export default function Home() {
  return (
    <div className="  flex items-center">
      <section id="hero">
        <div className="mb-4 lg:mb-8 flex flex-col gap-2 lg:gap-4 lg:max-w-[600px] max-w-[24rem]">
          <p className="text-white lg:text-6xl text-4xl">
            Learn by Solving Coding Problems
          </p>
          <p className="lg:text-2xl">
            Work on JavaScript-based challenges. Get instant feedback on your
            code and track your progress as you improve.
          </p>
        </div>
        <div className="flex  gap-2  max-w-[20rem]">
          <ButtonPrimary className="w-full">
            <Link href={"/register"}>Sign Up</Link>
          </ButtonPrimary>
          <ButtonSecondary className="w-full">
            <Link href={"/exercises"}>View Exercises</Link>
          </ButtonSecondary>
        </div>
      </section>
    </div>
  );
}
