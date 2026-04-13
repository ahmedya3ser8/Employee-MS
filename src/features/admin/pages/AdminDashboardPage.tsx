import { FiFileText, FiUsers } from "react-icons/fi";
import { LuBuilding2, LuCalendar } from "react-icons/lu";

const dashboardStats = [
  { id: 1, title: 'Total Employees', value: 3, Icon: FiUsers },
  { id: 2, title: 'Departments', value: 10, Icon: LuBuilding2 },
  { id: 3, title: "Today's Attendance", value: 1, Icon: LuCalendar },
  { id: 4, title: 'Pending Leaves', value: 2, Icon: FiFileText },
];

const AdminDashboardPage = () => {
  return (
    <section className="space-y-8">

      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-[#0F172B]"> Dashboard </h1>
        <p className="text-sm text-[#62748E]"> Welcome back, Admin — here's your overview </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {dashboardStats.map((stat) => (
          <div key={stat.id} className="col border border-[#E2E8F0] rounded-lg p-6 flex items-center justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
            <div className="absolute w-1 h-full bg-[#62748EB2] left-0 rounded-tr-2xl rounded-br-2xl transition-all duration-500 group-hover:bg-indigo-500/70"></div>
            <div className="space-y-1">
              <h4 className="text-sm text-[#314158] font-medium"> {stat.title} </h4>
              <span className="text-2xl font-bold text-[#0F172B]"> {stat.value} </span>
            </div>
            <div className="size-10 bg-slate-100 transition-all duration-500 group-hover:bg-indigo-50 flex items-center justify-center rounded-md">
              <stat.Icon size={22} className="text-slate-600 transition-all duration-500 group-hover:text-indigo-500" />
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default AdminDashboardPage;
