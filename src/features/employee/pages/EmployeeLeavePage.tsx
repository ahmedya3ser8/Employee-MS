import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuPlus, LuSend, LuThermometer, LuTreePalm, LuUmbrella } from "react-icons/lu";

const leaveStats = [
  { id: 1, title: 'Sick Leave', value: 1, Icon: LuThermometer },
  { id: 2, title: 'Casual Leave', value: 0, Icon: LuUmbrella },
  { id: 3, title: "Annual Leave", value: 1, Icon: LuTreePalm },
];

const leaveList = [
  { id: 1, type: 'ANNUAL', dates: 'Mar 27 — Mar 29, 2026', reason: 'Out for a trip', status: 'approved' },
  { id: 2, type: 'CASUAL', dates: 'Mar 27 — Mar 29, 2026', reason: 'Going For Vacations', status: 'rejected' },
  { id: 3, type: 'CASUAL', dates: 'Mar 27 — Mar 29, 2026', reason: 'Going to visit a temple', status: 'pending'},
  { id: 4, type: 'SICK', dates: 'Mar 27 — Mar 29, 2026', reason: 'I had a fracture on leg', status: 'approved' }
];

const leaveTypeList = [
  { id: 8, value: 'sick-leave', name: 'Sick Leave' },
  { id: 9, value: 'casual-leave', name: 'Casual Leave' },
  { id: 10, value: 'annual-leave', name: 'Annual Leave' },
];

const EmployeeLeavePage = () => {
  const [showModal, setShowModal] = useState(false);

  const renderStatus = (status: string) => {
    switch(status) {
      case 'approved': 
        return (
          <span className="bg-[#ECFDF5] text-[#007A55] py-1 px-2.5 rounded-md shadow-sm uppercase"> 
            {status} 
          </span>
        )
      case 'rejected': 
        return (
          <span className="bg-[#FFF1F2] text-[#C70036] py-1 px-2.5 rounded-md shadow-sm uppercase"> 
            {status} 
          </span>
        )
      case 'pending': 
        return (
          <span className="bg-[#FFFBEB] text-[#BB4D00] py-1 px-2.5 rounded-md shadow-sm uppercase"> 
            {status} 
          </span>
        )
    }
  }
  return (
    <section className="space-y-8">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div className="space-y-1">
          <h1 className="text-2xl font-medium text-[#0F172B]"> Leave Management </h1>
          <p className="text-sm text-[#62748E]"> Your leave history and requests </p>
        </div>

        <button onClick={() => setShowModal(prev => !prev)} className="max-md:w-50 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white flex items-center gap-2 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
          <LuPlus size={16} />
          Apply for Leave
        </button>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {leaveStats.map((stat) => (
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

      <div className="w-full overflow-x-auto border border-slate-200 rounded-md shadow-sm">
        <table className="min-w-5xl w-full ">
          <thead>
            <tr className="border-b border-slate-200 text-[#62748E] bg-slate-50 text-xs uppercase text-left">
              <th className="px-6 py-4"> Type </th>
              <th className="px-6 py-4"> Dates </th>
              <th className="px-6 py-4"> Reason </th>
              <th className="px-6 py-4"> Status </th>
            </tr>
          </thead>
          <tbody>
            {leaveList.map((leave) => (
              <tr key={leave.id} className="border-b border-slate-200 text-[#62748E] text-sm transition-all duration-300 hover:bg-slate-50 last:border-none">
                <td className="px-6 py-4 text-[#45556C] text-xs"> 
                  <span className="bg-[#F1F5F9] py-1 px-2.5 rounded-md"> {leave.type} </span>
                </td>
                <td className="px-6 py-4 text-xs"> {leave.dates} </td>
                <td className="px-6 py-4 text-sm"> {leave.reason} </td>
                <td className="px-6 py-4 text-xs"> {renderStatus(leave.status)} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal fixed z-50 inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">

            <div className="flex justify-between items-center flex-1">
              <div className="space-y-0.5">
                <h3 className="font-medium text-[#0F172B]"> Apply for Leave </h3>
                <p className="text-sm text-slate-400"> Submit your leave request for approval </p>
              </div>
              <button onClick={() => setShowModal(prev => !prev)} className="p-2 transition-all duration-300 hover:bg-slate-100 cursor-pointer">
                <IoMdClose size={20} />
              </button>
            </div>

            <form className="flex flex-col gap-5 mt-5">

              <div className="space-y-2">
                <label htmlFor="leave-type" className="block text-sm font-medium text-[#314158]"> Leave Type </label>
                <select id="leave-type" className="w-full bg-[#f8fafc80] border border-[#E2E8F0] rounded-md outline-none p-3">
                  {leaveTypeList.map((leaveType) => (
                    <option key={leaveType.id} value={leaveType.value}> {leaveType.name} </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                
                <h3 className="text-sm font-medium text-[#314158]"> Duration </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                  <div className="space-y-2">
                    <label htmlFor="year" className="block text-sm font-medium text-slate-400"> From </label>
                    <input type="date" id="year" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="0" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="year" className="block text-sm font-medium text-slate-400"> To </label>
                    <input type="date" id="year" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="0" />
                  </div>

                </div>

              </div>

              <div className="space-y-2">
                <label htmlFor="reason" className="block text-sm font-medium text-[#314158]"> Reason </label>
                <textarea className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" id="reason" placeholder="Briefly describe why you need this leave..."></textarea>
              </div>

              <div className="flex gap-3 items-center">
                <button type="button" onClick={() => setShowModal(prev => !prev)} className="w-full lg:w-1/2 text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
                  Cancel
                </button>
                <button type="submit" className="w-full lg:w-1/2 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4] flex items-center justify-center gap-2">
                  <LuSend />
                  Submit
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </section>
  )
}

export default EmployeeLeavePage;
