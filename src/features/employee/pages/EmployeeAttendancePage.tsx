import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuCalendar, LuLogIn } from "react-icons/lu";

const attendanceStats = [
  { id: 1, title: 'Days Present', value: 2, Icon: LuCalendar },
  { id: 2, title: 'Late Arrivals', value: 0, Icon: AiOutlineExclamationCircle },
  { id: 3, title: "Avg. Work Hrs", value: 8.5, Icon: MdOutlineWatchLater },
];

const attendanceList = [
  { id: 10, date: 'Mar 15, 2026', checkIn: '04:12 PM', checkOut: '12:12 AM', workingHours: '8h 0m', dayType: 'Full Day', status: 'PRESENT' },
  { id: 11, date: 'Mar 13, 2026', checkIn: '07:18 PM', checkOut: '03:18 AM', workingHours: '8h 0m', dayType: 'Full Day', status: 'PRESENT' },
];

const EmployeeAttendancePage = () => {
  return (
    <section className="space-y-8">

      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-[#0F172B]"> Attendance </h1>
        <p className="text-sm text-[#62748E]"> Track your work hours and daily check-ins </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {attendanceStats.map((stat) => (
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

      <div className="card flex flex-col gap-5">
        
        <h3 className="text-[#0F172B] font-semibold"> Recent Activity </h3>
        
        <div className="w-full overflow-x-auto border border-slate-200 rounded-md shadow-sm">
          <table className="min-w-5xl w-full ">
            <thead>
              <tr className="border-b border-slate-200 text-[#62748E] bg-slate-50 text-xs uppercase text-left">
                <th className="px-6 py-4"> Date </th>
                <th className="px-6 py-4"> Check In </th>
                <th className="px-6 py-4"> Check Out </th>
                <th className="px-6 py-4"> Working Hours </th>
                <th className="px-6 py-4"> Day Type </th>
                <th className="px-6 py-4"> Status </th>
              </tr>
            </thead>
            <tbody>
              {attendanceList.map((attendance) => (
                <tr key={attendance.id} className="border-b border-slate-200 text-[#45556C] text-sm transition-all duration-300 hover:bg-slate-50 last:border-none">
                  <td className="px-6 py-4 text-[#0F172B] font-medium"> {attendance.date} </td>
                  <td className="px-6 py-4"> {attendance.checkIn} </td>
                  <td className="px-6 py-4"> {attendance.checkOut} </td>
                  <td className="px-6 py-4"> {attendance.workingHours} </td>
                  <td className="px-6 py-4">
                    <span className="bg-[#ECFDF5] text-[#007A55] py-1 px-2.5 rounded-md shadow-sm text-xs"> 
                      {attendance.dayType} 
                    </span>
                  </td>
                  <td className="px-6 py-4"> 
                    <span className="bg-[#ECFDF5] text-[#007A55] py-1 px-2.5 rounded-md shadow-sm text-xs"> 
                      {attendance.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <div className="absolute bottom-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white flex items-center gap-4 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
        <LuLogIn size={28} />
        <div className="text-center">
          <h3 className="text-lg font-medium"> Clock In </h3>
          <p className="text-xs"> start your work day </p>
        </div>
      </div>

    </section>
  )
}

export default EmployeeAttendancePage;
