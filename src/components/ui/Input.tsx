import { useState } from "react";
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps<TFieldValue extends FieldValues> {
  id: string;
  label: string;
  type?: "text" | "email" | "password" | "number" | 'date' | 'tel';
  placeholder?: string;
  register: UseFormRegister<TFieldValue>;
  name: Path<TFieldValue>;
  error: string;
}

const Input = <TFieldValue extends FieldValues>({ id, label, type = 'text', placeholder, name, error, register }: InputProps<TFieldValue>) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const inputType = isPassword ? showPassword ? 'text' : 'password' : type;

  return (
    <div className="space-y-2">

      <label htmlFor={id} className="label"> 
        {label} 
      </label>

      <div className="relative">
        
        <input 
          type={inputType} 
          id={id} 
          className="input" 
          placeholder={placeholder} 
          {...register(name, type === 'number' ? { setValueAs: (v) => v === '' ? 0 : Number(v) } : {})}
        />

        {isPassword && (
          <button 
            onClick={() => setShowPassword(prev => !prev)} 
            type="button" 
            className="absolute top-4 right-4 text-[#62748E] cursor-pointer"
          > 
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />} 
          </button>
        )}

      </div>

      {error && (
        <p className="text-rose-500 text-sm lowercase"> {error} </p>
      )}

    </div>
  )
}

export default Input;
