import ChallengeCard from "@/components/ChallengeCard";
import ChallengesFilter from "@/components/ChallengesFilter";

export default function ChallengesPage() {
  return (
    <div className="lg:flex lg:gap-16">
      <div className="lg:order-2">
        <ChallengesFilter />
      </div>

      <div className="w-full lg:max-w-[80%]">
        <input
          className="mb-4 w-full rounded bg-[#2c2c2c] p-4 text-lg text-white"
          type="search"
          placeholder="Search"
        />
        <ChallengeCard />
      </div>
    </div>
  );
}
