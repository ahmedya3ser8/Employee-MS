
type EmployeeFormHeaderProps = {
  isEditMode: boolean;
}

const EmployeeFormHeader = ({ isEditMode }: EmployeeFormHeaderProps) => {
  return (
    <div className="space-y-1">

      <h1 className="text-2xl font-medium text-[#0F172B]">
        {isEditMode ? 'Edit Employee' : 'Add New Employee'}
      </h1>

      <p className="text-sm text-[#62748E]"> 
        {isEditMode ? 'Update employee details' : 'Create a user account and employee profile'}
      </p>

    </div>
  )
}

export default EmployeeFormHeader;
