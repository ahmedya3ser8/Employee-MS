import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<TFieldValue extends FieldValues> {
  id: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<TFieldValue>;
  name: Path<TFieldValue>;
  error: string;
}

const Textarea = <TFieldValue extends FieldValues>({ id, label, register, name, placeholder, error }: InputProps<TFieldValue>) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="label"> {label} </label>
      <textarea className="input" id={id} {...register(name)} placeholder={placeholder}></textarea>
      {error && (
        <p className="text-rose-500 text-sm lowercase"> {error} </p>
      )}
    </div>
  )
}

export default Textarea;
