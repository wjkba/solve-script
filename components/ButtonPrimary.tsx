interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function ButtonPrimary({
  children,
  className,
  type = "button",
  ...props
}: ButtonPrimaryProps) {
  return (
    <button
      className={`${className} cursor-pointer lg:py-3 bg-[#F7DF1E] text-black px-6 py-2 rounded`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
