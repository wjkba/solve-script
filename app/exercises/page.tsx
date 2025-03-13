import ExerciseCard from "@/components/ExerciseCard";
import ExercisesFilter from "@/components/ExercisesFilter";

export default function ExercisesPage() {
  return (
    <div className="lg:flex lg:gap-16">
      <div className="lg:order-2">
        <ExercisesFilter />
      </div>

      <div className="w-full lg:max-w-[80%]">
        <input
          className="mb-4 w-full rounded bg-[#2c2c2c] text-white text-lg p-4"
          type="search"
          placeholder="Search"
        />
        <ExerciseCard />
      </div>
    </div>
  );
}
