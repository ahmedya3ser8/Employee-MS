import { Input, Select } from "@/components";
import { DEPARTMENTS, type EmployeeDetailsProps } from "../types/employee.types";

const EmployeeDetails = ({ errors, register }: EmployeeDetailsProps) => {
  return (
    <div className="card border border-slate-200 rounded-md p-6">
      <h2 className="font-medium border-b border-slate-100 pb-6"> Employment Details </h2>
      <div className="flex flex-col gap-6 pt-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <Select 
            id="department"
            label="Department"
            register={register}
            name="department"
            error={errors.department?.message as string}
            options={DEPARTMENTS}
            optionTitle="Select Department"
          />

          <Input 
            id="position"
            label="Position"
            placeholder="Marketing"
            register={register}
            name="position"
            error={errors.position?.message as string}
          />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <Input 
            id="basicSalary"
            label="Basic Salary"
            type="number"
            placeholder="5000"
            register={register}
            name="basicSalary"
            error={errors.basicSalary?.message as string}
          />

          <Input 
            id="allowances"
            label="Allowances"
            type="number"
            placeholder="0"
            register={register}
            name="allowances"
            error={errors.allowances?.message as string}
          />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <Input 
            id="deductions"
            label="Deductions"
            type="number"
            placeholder="0"
            register={register}
            name="deductions"
            error={errors.deductions?.message as string}
          />

        </div>

      </div>
    </div>
  )
}

export default EmployeeDetails;
