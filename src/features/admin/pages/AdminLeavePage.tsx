import { IoMdClose } from "react-icons/io";
import { LuCheck } from "react-icons/lu";

const payslipsList = [
  { id: 1, employee: 'David Michael', type: 'ANNUAL', dates: 'Mar 27 — Mar 29, 2026', reason: 'Out for a trip', status: 'approved' },
  { id: 2, employee: 'Alex Matthew', type: 'CASUAL', dates: 'Mar 27 — Mar 29, 2026', reason: 'Going For Vacations', status: 'rejected' },
  { id: 3, employee: 'John Doe', type: 'CASUAL', dates: 'Mar 27 — Mar 29, 2026', reason: 'Going to visit a temple', status: 'pending'},
  { id: 4, employee: 'David Michael', type: 'SICK', dates: 'Mar 27 — Mar 29, 2026', reason: 'I had a fracture on leg', status: 'approved' }
];

const AdminLeavePage = () => {
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

      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-[#0F172B]"> Leave Management </h1>
        <p className="text-sm text-[#62748E]"> Manage leave applications </p>
      </div>

      <div className="w-full overflow-x-auto border border-slate-200 rounded-md shadow-sm">
        <table className="min-w-5xl w-full ">
          <thead>
            <tr className="border-b border-slate-200 text-[#62748E] bg-slate-50 text-xs uppercase text-left">
              <th className="px-6 py-4"> Employee </th>
              <th className="px-6 py-4"> Type </th>
              <th className="px-6 py-4"> Dates </th>
              <th className="px-6 py-4"> Reason </th>
              <th className="px-6 py-4"> Status </th>
              <th className="px-6 py-4"> Actions </th>
            </tr>
          </thead>
          <tbody>
            {payslipsList.map((payslip) => (
              <tr key={payslip.id} className="border-b border-slate-200 text-[#62748E] text-sm transition-all duration-300 hover:bg-slate-50 last:border-none">
                <td className="px-6 py-4 text-[#0F172B] text-sm"> {payslip.employee} </td>
                <td className="px-6 py-4 text-[#45556C] text-xs"> 
                  <span className="bg-[#F1F5F9] py-1 px-2.5 rounded-md"> {payslip.type} </span>
                </td>
                <td className="px-6 py-4 text-xs"> {payslip.dates} </td>
                <td className="px-6 py-4 text-sm"> {payslip.reason} </td>
                <td className="px-6 py-4 text-xs"> {renderStatus(payslip.status)} </td>
                <td className="px-6 py-4">
                  {payslip.status === 'pending' && (
                    <div className="flex gap-2">
                      <button className="bg-[#ECFDF5] text-[#009966] p-1.5 rounded-md cursor-pointer shadow-sm"> 
                        <LuCheck size={16} /> 
                      </button>
                      <button className="bg-[#FFF1F2] text-[#EC003F] p-1.5 rounded-md cursor-pointer shadow-sm"> 
                        <IoMdClose size={16} /> 
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default AdminLeavePage;
