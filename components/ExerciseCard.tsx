export default function ExerciseCard() {
  return (
    <div className="bg-[#323234] px-4 py-4 rounded">
      <div className="mb-2 flex items-center gap-2">
        <div className="w-3 h-3 bg-[#f44336] rounded-full"></div>
        <h3 className="text-white text-lg">Reverse a String</h3>
      </div>
      <p className=" max-w-[592px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
        Write a function that takes a string as input and returns the string
        reversed.
      </p>
    </div>
  );
}
