import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<TFieldValue extends FieldValues> {
  id: string;
  label: string;
  type?: 'number' | 'string';
  register: UseFormRegister<TFieldValue>;
  name: Path<TFieldValue>;
  error: string;
  options: (string | number)[];
  optionTitle?: string;
}

const Select = <TFieldValue extends FieldValues>({ id, label, type, register, name, error, options, optionTitle }: InputProps<TFieldValue>) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="label"> {label} </label>
      <select {...register(name, type === 'number' ? { setValueAs: (value) => Number(value) } : {})} id={id} className="w-full bg-[#f8fafc80] border border-[#E2E8F0] rounded-md outline-none p-3">
        {optionTitle && <option value=""> {optionTitle} </option>}
        {options.map((option, index) => (
          <option key={index} value={option}> {option} </option>
        ))}
      </select>
      {error && (
        <p className="text-rose-500 text-sm lowercase"> {error} </p>
      )}
    </div>
  )
}

export default Select;
