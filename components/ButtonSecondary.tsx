interface ButtonSecondaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ButtonSecondary({ children }: ButtonSecondaryProps) {
  return (
    <button className="cursor-pointer outline outline-[hsl(0,0%,30%)] text-white px-6 py-2 rounded">
      {children}
    </button>
  );
}
