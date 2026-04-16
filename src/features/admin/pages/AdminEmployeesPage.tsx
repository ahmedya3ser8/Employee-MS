import { LuPencil, LuPlus, LuSearch, LuTrash } from "react-icons/lu";
import { Link } from "react-router-dom";

const DepartmentsList = [
  { id: 1, value: 'all', name: 'All Departments' },
  { id: 2, value: 'engineering', name: 'Engineering' },
  { id: 3, value: 'human-resources', name: 'Human Resources' },
  { id: 4, value: 'marketing', name: 'Marketing' },
  { id: 5, value: 'sales', name: 'Sales' },
  { id: 6, value: 'finance', name: 'Finance' },
  { id: 7, value: 'operations', name: 'Operations' },
  { id: 8, value: 'it-support', name: 'It Support' },
  { id: 9, value: 'product-management', name: 'Product Management' },
  { id: 10, value: 'desgin', name: 'Desgin' },
];

const EmployeesList = [
  { id: 11, department: 'IT Support', username: 'David Michael', avatarText: 'DM', role: 'Associate Business Support' },
  { id: 12, department: 'Human Resources', username: 'Sarah Johnson', avatarText: 'SJ', role: 'HR Manager' },
  { id: 13, department: 'Engineering', username: 'Ahmed Yasser', avatarText: 'AY', role: 'Frontend Developer' },
  { id: 14, department: 'Design', username: 'Mona Ali', avatarText: 'MA', role: 'UI/UX Designer' },
  { id: 15, department: 'Finance', username: 'Omar Khaled', avatarText: 'OK', role: 'Financial Analyst' },
  { id: 16, department: 'Marketing', username: 'Nour Ibrahim', avatarText: 'NI', role: 'Digital Marketing Specialist' },
];

const AdminEmployeesPage = () => {
  return (
    <section className="space-y-8">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div className="space-y-1">
          <h1 className="text-2xl font-medium text-[#0F172B]"> Employees </h1>
          <p className="text-sm text-[#62748E]"> Manage your team members </p>
        </div>

        <Link to='/admin/employees/add' className="max-md:w-50 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white flex items-center gap-2 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
          <LuPlus size={16} />
          Add Employee
        </Link>

      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="text-[#90A1B9] bg-[#f8fafc80] border border-[#E2E8F0] rounded-md py-3 pl-10 pr-4 flex-1 relative">
          <LuSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2" />
          <input type="search" className="w-full outline-none" placeholder="Search employees..." />
        </div>
        <select className="w-50 bg-[#f8fafc80] border border-[#E2E8F0] rounded-md outline-none p-3">
          {DepartmentsList.map((department) => (
            <option key={department.id} value={department.value}> {department.name} </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {EmployeesList.map((employee) => (
          <div key={employee.id} className="col border border-[#E2E8F0B2] rounded-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-md">
            <div className="bg-linear-to-r from-[#F1F5F9] to-[#F8FAFC] aspect-4/3 w-full flex flex-col justify-center items-center relative">
              <span className="bg-white text-slate-600 font-semibold text-xs rounded-md shadow-sm px-2.5 py-1 absolute top-4 left-4">
                {employee.department}
              </span>
              <div className="size-20 bg-linear-to-r from-[#E0E7FF] to-[#F1F5F9] rounded-full text-[#7C86FF] font-medium text-2xl flex justify-center items-center">
                {employee.avatarText}
              </div>
            </div>
            <div className="p-5 flex justify-between items-center">
              <div>
                <h3 className="text-[#0F172B]"> {employee.username} </h3>
                <p className="text-xs text-[#62748E]"> {employee.role} </p>
              </div>
              <div className="flex gap-2 text-[#0F172B]">
                <Link to={`/admin/employees/edit/${employee.id}`} className="p-2 rounded-md bg-linear-to-r from-[#E0E7FF] to-[#F1F5F9] transition-all duration-300 hover:text-indigo-600 cursor-pointer">
                  <LuPencil />
                </Link>
                <button className="p-2 rounded-md bg-linear-to-r from-[#E0E7FF] to-[#F1F5F9] transition-all duration-300 hover:text-rose-600 cursor-pointer">
                  <LuTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default AdminEmployeesPage;
