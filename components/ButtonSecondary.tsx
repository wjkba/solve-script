interface ButtonSecondaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function ButtonSecondary({
  children,
  className,
  type = "button",
  ...props
}: ButtonSecondaryProps) {
  return (
    <button
      className={`${className} cursor-pointer lg:py-3  outline outline-[hsl(0,0%,30%)] text-white px-6 py-2 rounded`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
