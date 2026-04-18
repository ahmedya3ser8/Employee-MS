import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Input } from "@/shared";
import { loginSchema, type LoginFormValues } from '../validations/auth.schema';
import { LuLoader } from 'react-icons/lu';

type LoginFormProps = {
  submitForm: (data: LoginFormValues) => void;
  loading: boolean;
}

const LoginForm = ({ submitForm, loading }: LoginFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    mode: 'onTouched',
    resolver: zodResolver(loginSchema)
  });

  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-6">
      <Input 
        id="email"
        type="email"
        label="Email address"
        placeholder="john@example.com"
        register={register}
        name='email'
        error={errors.email?.message as string}
      />
      <Input 
        id="password"
        type="password"
        label="Password"
        placeholder="******"
        register={register}
        name='password'
        error={errors.password?.message as string}
      />
      <button type="submit" className="btn-primary">
        {loading ? <LuLoader size={22} className='animate-spin mx-auto' /> : 'Sign in'}
      </button>
    </form>
  )
}

export default LoginForm;
