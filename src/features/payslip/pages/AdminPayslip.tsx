import { Link } from "react-router-dom";

import PayslipHeader from "../components/PayslipHeader";
import PayslipModal from "../components/AddPayslipModal";

import { DataTable, Loader } from "@/components";
import { formatMonthYear } from "@/utils/formateDate";

import { LuDownload } from "react-icons/lu";
import usePayslip from "../hooks/usePayslip";

const AdminPayslip = () => {
  const { isPayslipLoading, adminPayslipList, setShowModal, showModal } = usePayslip();

  if (isPayslipLoading) return <Loader />

  return (
    <section className="space-y-8">

      <PayslipHeader
        title="Payslips"
        description="Generate and manage employee payslips"
        setShowModal={setShowModal} 
      />

      <DataTable 
        columns={[
          { header: 'Employee', render: (row) => `${row.employee.firstName} ${row.employee.lastName}` },
          { header: 'Period', render: (row) => formatMonthYear(row.month, row.year) },
          { header: 'Basic Salary', render: (row) => `$${row.basicSalary}` },
          { header: 'Net Salary', render: (row) => `$${row.netSalary}` },
          { header: 'Action', render: (row) => (
            <Link to={`/admin/payslips/print/${row._id}`} className="btn-download"> 
              <LuDownload /> Download 
            </Link>
          )},
        ]}
        data={adminPayslipList}
      />

      {showModal && <PayslipModal setShowModal={setShowModal} />}

    </section>
  )
}

export default AdminPayslip;
