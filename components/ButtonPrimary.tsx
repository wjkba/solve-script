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
      className={`${className} cursor-pointer rounded bg-[#F7DF1E] px-6 py-2 text-black`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
