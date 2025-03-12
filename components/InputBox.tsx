interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputBox({ id, label, ...props }: InputBoxProps) {
  return (
    <div className="flex gap-2">
      <input id={id} {...props} className="bg-green-300" />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
}
