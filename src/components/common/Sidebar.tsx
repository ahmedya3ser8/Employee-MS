import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useAuthStore } from "@/features/auth/store/authStore";
import toast from "react-hot-toast";
import { FaChevronRight, FaUser } from "react-icons/fa";
import { FiDollarSign, FiFileText, FiUser } from "react-icons/fi";
import { LuCalendar, LuUsers } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const adminRoutes = [
  { id: 1, path: '/admin/dashboard', text: 'Dashboard', Icon: RxDashboard },
  { id: 2, path: '/admin/employees', text: 'Employees', Icon: LuUsers },
  { id: 3, path: '/admin/leave', text: 'Leave', Icon: FiFileText },
  { id: 4, path: '/admin/payslips', text: 'Payslips', Icon: FiDollarSign },
  { id: 5, path: '/admin/profile', text: 'Profile', Icon: FaUser }
];

const employeeRoutes = [
  { id: 1, path: '/employee/dashboard', text: 'Dashboard', Icon: RxDashboard },
  { id: 2, path: '/employee/attendance', text: 'Attendance', Icon: LuCalendar },
  { id: 3, path: '/employee/leave', text: 'Leave', Icon: FiFileText },
  { id: 4, path: '/employee/payslips', text: 'Payslips', Icon: FiDollarSign },
  { id: 5, path: '/employee/profile', text: 'Profile', Icon: FaUser }
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout, employee } = useAuthStore();

  const location = useLocation(); 
  const activeRoutes = location.pathname.startsWith('/admin') ? adminRoutes : employeeRoutes;

  const handleLogout = async () => {
    await logout();

    toast.success('User logged out successfully');

    navigate("/auth/login");
  }

  return (
    <div className="sidebar w-65 bg-linear-to-b from-[#0F172B] via-[#0F172B] to-[#020618] border-r border-white/4 text-white flex flex-col">

      <div className="flex items-center gap-3 py-6 px-5 border-b border-white/6">
        <FiUser size={28} />
        <div>
          <h3 className="text-sm font-semibold"> Employee MS </h3>
          <p className="text-xs font-medium text-[#62748E]"> Management System </p>
        </div>
      </div>

      <div className="bg-[#171E32] flex items-center gap-3 py-4 px-3 rounded-md mx-3 mt-4 border border-white/4">
        <div className="size-9 rounded-md bg-[#1E2A3E] flex justify-center items-center text-[#90A1B9] font-semibold text-xs uppercase"> 
          {employee?.firstName[0]}
        </div>
        <div>
          <h3 className="text-sm font-medium capitalize"> 
            {employee?.firstName} {employee?.lastName} 
          </h3>
          <p className="text-xs text-[#62748E] capitalize">
            {employee?.user.role}
          </p>
        </div>
      </div>

      <ul className="px-3 space-y-1 flex-1 overflow-y-auto mt-5">
        {activeRoutes.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {({ isActive }) => (
                <div className={`flex items-center gap-3 py-2.5 px-3 rounded-md cursor-pointer relative transition-all duration-300 ${isActive ? 'bg-[#615FFF1F] text-[#A3B3FF]' : 'text-[#CAD5E2] hover:text-white hover:bg-white/4'}`}>
                  {isActive && <div className="absolute left-0 bg-[#615FFF] w-1 h-5 rounded-tr-2xl rounded-br-2xl"></div> }
                  <link.Icon className={`${isActive && 'text-[#90A1B9]'}`} size={17} />
                  <span className="flex-1 text-sm font-medium"> {link.text} </span>
                  {isActive && <FaChevronRight size={14} />}
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <button onClick={handleLogout} className="flex items-center gap-3 text-[#90A1B9] px-4 py-6 border-t border-white/6 transition-all duration-300 hover:text-rose-400 cursor-pointer">
        <MdLogout size={17} />
        <span className="text-sm font-medium"> Log out </span>
      </button>

    </div>
  )
}

export default Sidebar;
