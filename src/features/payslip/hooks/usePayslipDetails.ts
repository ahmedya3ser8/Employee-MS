import { usePayslipStore } from "@/features/payslip/store/payslipStore";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const usePayslipDetails = () => {
  const { id } = useParams();
  const { getPayslip, payslipData, isPayslipLoading } = usePayslipStore();

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  useEffect(() => {
    getPayslip(id!);
  }, [getPayslip, id]);

  return {
    reactToPrintFn,
    payslipData,
    isPayslipLoading,
    contentRef
  }
}

export default usePayslipDetails;
