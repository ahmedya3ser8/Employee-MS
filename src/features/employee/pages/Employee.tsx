import EmployeeFilters from "../components/EmployeeFilters";
import EmployeeHeader from "../components/EmployeeHeader";
import EmployeeList from "../components/EmployeeList";

import useEmployee from "../hooks/useEmployee";

const Employee = () => {
  const { employeeList, handleDeleteEmployee, handleDepartment, handleSearch, loading } = useEmployee();

  return (
    <section className="space-y-8">

      <EmployeeHeader />

      <EmployeeFilters 
        handleDepartment={handleDepartment}
        handleSearch={handleSearch}
      />

      <EmployeeList 
        loading={loading}
        employeeList={employeeList}
        handleDeleteEmployee={handleDeleteEmployee}
      />

    </section>
  )
}

export default Employee;
