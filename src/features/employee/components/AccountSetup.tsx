import { Input, Select } from "@/components";
import type { AccountSetupProps } from "../types/employee.types";

const AccountSetup = ({ errors, isEditMode, register }: AccountSetupProps) => {
  return (
    <div className="card border border-slate-200 rounded-md p-6">
      <h2 className="font-medium border-b border-slate-100 pb-6"> Account Setup </h2>
      <div className="flex flex-col gap-6 pt-6">

        <Input 
          id="email"
          label="Work Email"
          type="email"
          placeholder="john@gmail.com"
          register={register}
          name="email"
          error={errors.email?.message as string}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {!isEditMode && (
            <Input 
              id="password"
              type="password"
              label="Temporary Password"
              placeholder="******"
              register={register}
              name='password'
              error={errors.password?.message as string}
            />
          )}

          <Select 
            id="role"
            label="System Role"
            register={register}
            name="role"
            error={errors.role?.message as string}
            options={['employee', 'admin']}
          />

        </div>

      </div>
    </div>
  )
}

export default AccountSetup;
