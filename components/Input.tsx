interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  return (
    <input
      className="min-h-12 w-full rounded bg-[hsl(0,0%,20%)] px-4 text-lg"
      {...props}
    />
  );
}
