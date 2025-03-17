import Link from "next/link";

export default function ChallengeCard() {
  return (
    <Link href="challenges/1">
      <div className="rounded bg-[#323234] px-4 py-4">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#f44336]"></div>
          <h3 className="text-lg text-white">Reverse a String</h3>
        </div>
        <p className="text-overflow-ellipsis max-w-[592px] overflow-hidden whitespace-nowrap">
          Write a function that takes a string as input and returns the string
          reversed.
        </p>
      </div>
    </Link>
  );
}
