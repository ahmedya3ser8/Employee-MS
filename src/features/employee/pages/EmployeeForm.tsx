import AccountSetup from "../components/AccountSetup";
import EmployeeDetails from "../components/EmployeeDetails";
import EmployeeFormActions from "../components/EmployeeFormActions";
import EmployeeFormHeader from "../components/EmployeeFormHeader";
import PersonalInfo from "../components/PersonalInfo";
import useEmployeeForm from "../hooks/useEmployeeForm";

const EmployeeForm = () => {
  const { errors, handleSubmit, loading, register, submitForm, isEditMode } = useEmployeeForm();

  return (
    <section className="space-y-8">

      <EmployeeFormHeader isEditMode={isEditMode} />

      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-8">

        <PersonalInfo register={register} errors={errors} />

        <EmployeeDetails register={register} errors={errors} />

        <AccountSetup register={register} errors={errors} isEditMode={isEditMode} />

        <EmployeeFormActions loading={loading} isEditMode={isEditMode} />

      </form>

    </section>
  )
}

export default EmployeeForm;
