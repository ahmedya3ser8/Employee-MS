import type { StatusBadgeProps } from "@/features/leave/types/leave.types"; 

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const base = "py-1 px-2.5 rounded-md shadow-sm uppercase text-xs";

  const styles = {
    approved: 'bg-[#ECFDF5] text-[#007A55]',
    rejected: 'bg-[#FFF1F2] text-[#C70036]',
    pending: 'bg-[#FFFBEB] text-[#BB4D00]',
    present: 'bg-[#ECFDF5] text-[#007A55]',
    absent: 'bg-[#FFF1F2] text-[#C70036]',
    late: 'bg-[#FFFBEB] text-[#BB4D00]',
    'full day': 'bg-[#ECFDF5] text-[#007A55]',
    'three quarter day': 'bg-[#EFF6FF] text-[#2563EB]',
    'half day': 'bg-[#FFF7ED] text-[#EA580C]',
    'short day': 'bg-[#FEF2F2] text-[#DC2626] border border-[#FECACA]'
  };

  if (!status) return <span className={`${base} bg-[#EFF6FF] text-[#2563EB]`}> in progress </span>

  return (
    <span className={`${base} ${styles[status]}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
