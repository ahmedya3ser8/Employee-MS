import { DataTable, Loader } from "@/components";
import { formatRange } from "@/utils/formateDate";
import LeaveActions from "../components/LeaveActions";
import LeaveHeader from "../components/LeaveHeader";
import StatusBadge from "../components/StatusBadge";
import useLeave from "../hooks/useLeave";

const AdminLeave = () => {
  const { handleUpdateLeave, isLeaveLoading, leaveList, loadingLeaveId, type } = useLeave();

  if (isLeaveLoading) return <Loader />

  return (
    <section className="space-y-8">

      <LeaveHeader 
        title="Leave Management"
        description="Your leave history and requests"
      />

      <DataTable 
        columns={[
          { header: 'Employee', render: (row) => `${row.employee.firstName} ${row.employee.lastName}` },
          { header: 'Type', render: (row) => <span className="badge"> {row.type} </span> },
          { header: 'Dates', render: (row) => formatRange(row.startDate, row.endDate) },
          { header: 'Reason', field: 'reason' },
          { header: 'Status', render: (row) => (
            <StatusBadge 
              status={row.status}
            />
          )},
          { header: 'Actions', render: (row) => (
            <LeaveActions 
              status={row.status}
              id={row._id}
              handleUpdateLeave={handleUpdateLeave}
              loadingLeaveId={loadingLeaveId as string}
              type={type as string}
            />
          )},
        ]}
        data={leaveList}
      />

    </section>
  )
}

export default AdminLeave;
