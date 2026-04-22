import type { StatusBadgeProps } from "../types/leave.types";

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const base = "py-1 px-2.5 rounded-md shadow-sm uppercase text-xs";

  const styles = {
    approved: "bg-[#ECFDF5] text-[#007A55]",
    rejected: "bg-[#FFF1F2] text-[#C70036]",
    pending: "bg-[#FFFBEB] text-[#BB4D00]",
  };

  return (
    <span className={`${base} ${styles[status]}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
