interface ButtonPrimaryProps {
  children: React.ReactNode;
}

export default function ButtonPrimary({ children }: ButtonPrimaryProps) {
  return (
    <button className="cursor-pointer w-full bg-[#F7DF1E] text-black px-6 py-2 rounded">
      {children}
    </button>
  );
}
