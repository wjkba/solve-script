import Exercise from "@/components/Exercise";

export default function ExercisesPage() {
  return (
    <div>
      <input
        className="mb-4 w-full rounded bg-[#2c2c2c] text-white text-lg p-4"
        type="search"
        placeholder="Search"
      />
      <Exercise />
    </div>
  );
}
