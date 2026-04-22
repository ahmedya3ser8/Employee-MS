import { Link } from "react-router-dom";

import { DataTable, Loader } from "@/components";
import usePayslip from "../hooks/usePayslip";

import { formatMonthYear } from "@/utils/formateDate";
import { LuDownload } from "react-icons/lu";
import PayslipHeader from "../components/PayslipHeader";

const EmployeePayslip = () => {
  const { isPayslipLoading, employeePayslipList } = usePayslip();

  if (isPayslipLoading) return <Loader />

  return (
    <section className="space-y-8">

      <PayslipHeader
        title="Payslips"
        description="Your payslip history"
        isAdmin={false}
      />

      <DataTable 
        columns={[
          { header: 'Period', render: (row) => formatMonthYear(row.month, row.year) },
          { header: 'Basic Salary', render: (row) => `$${row.basicSalary}` },
          { header: 'Net Salary', render: (row) => `$${row.netSalary}` },
          { header: 'Action', render: (row) => (
            <Link to={`/employee/payslips/print/${row._id}`} className="btn-download"> 
              <LuDownload /> Download 
            </Link>
          )},
        ]}
        data={employeePayslipList}
      />

    </section>
  )
}

export default EmployeePayslip;
