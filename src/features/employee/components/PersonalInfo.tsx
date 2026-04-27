import { Input, Textarea } from "@/components";
import type { PersonalInfoProps } from "../types/employee.types";

const PersonalInfo = ({ errors, register }: PersonalInfoProps) => {
  return (
    <div className="card border border-slate-200 rounded-md p-6">
      <h2 className="font-medium border-b border-slate-100 pb-6"> Personal Information </h2>
      <div className="flex flex-col gap-6 pt-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <Input 
            id="firstName"
            label="First Name"
            placeholder="john"
            register={register}
            name="firstName"
            error={errors.firstName?.message as string}
          />

          <Input 
            id="lastName"
            label="Last Name"
            placeholder="Doe"
            register={register}
            name="lastName"
            error={errors.lastName?.message as string}
          />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <Input 
            id="phoneNumber"
            label="Phone Number"
            placeholder="01023456789"
            register={register}
            name="phoneNumber"
            error={errors.phoneNumber?.message as string}
          />

        </div>

        <Textarea 
          id="bio"
          label="Bio (Optional)"
          register={register}
          name="bio"
          placeholder="Brief description..."
          error={errors.bio?.message as string}
        />

      </div>
    </div>
  )
}

export default PersonalInfo;
