import PayslipDetailsHeader from "../components/PayslipDetailsHeader";
import PayslipDetailsInfo from "../components/PayslipDetailsInfo";
import PayslipDetailsTable from "../components/PayslipDetailsTable";

import { Loader } from "@/components";

import usePayslipDetails from "../hooks/usePayslipDetails";

const PayslipDetails = () => {
  const { isPayslipLoading, payslipData, contentRef, reactToPrintFn } = usePayslipDetails();

  if (isPayslipLoading) return <Loader />

  return (
    <section>

      <div ref={contentRef} className="max-w-2xl mx-auto bg-white space-y-8 p-8">

        <PayslipDetailsHeader 
          month={payslipData?.month as number} 
          year={payslipData?.year as number} 
        />

        <PayslipDetailsInfo 
          firstName={payslipData?.employee.firstName as string}
          lastName={payslipData?.employee.lastName as string}
          position={payslipData?.employee.position as string}
          email={payslipData?.employee.user.email as string}
          month={payslipData?.month as number}
          year={payslipData?.year as number}
        />

        <PayslipDetailsTable 
          allowances={payslipData?.allowances as number}
          basicSalary={payslipData?.basicSalary as number}
          deductions={payslipData?.deductions as number}
          netSalary={payslipData?.netSalary as number}
        />

      </div>

      <button onClick={reactToPrintFn} className="btn-primary block mx-auto">
        Print Payslip
      </button>

    </section>
  )
}

export default PayslipDetails;
