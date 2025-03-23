import { getSession } from "@/actions/auth";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();
  const { isLoggedIn } = session;
  return (
    <div>
      <section className="relative z-20 pt-8" id="hero">
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
          {!isLoggedIn ? (
            <>
              <ButtonPrimary className="w-full">
                <Link href={"/register"}>Sign Up</Link>
              </ButtonPrimary>
              <ButtonSecondary className="w-full">
                <Link href={"/challenges"}>View Challenges</Link>
              </ButtonSecondary>
            </>
          ) : (
            <>
              <ButtonPrimary className="w-full">
                <Link href={"/challenges"}>Start Solving</Link>
              </ButtonPrimary>
              <ButtonSecondary className="w-full">
                <Link href={"/profile"}>My Progress</Link>
              </ButtonSecondary>
            </>
          )}
        </div>
      </section>
      <div className="absolute top-[30%] right-0 z-0 max-h-[65vh] w-full opacity-70 lg:top-auto lg:bottom-0">
        <Image
          alt="background"
          src="/images/ss-background.png"
          width={1440}
          height={800}
          className="w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
