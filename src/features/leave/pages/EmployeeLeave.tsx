import AddLeaveModal from "../components/AddLeaveModal";
import LeaveHeader from "../components/LeaveHeader";
import LeaveStats from "../components/LeaveStats";
import StatusBadge from "../components/StatusBadge";

import { DataTable, Loader } from "@/components";
import { formatRange } from "@/utils/formateDate";

import useLeave from "../hooks/useLeave";

const EmployeeLeave = () => {
  const { isLeaveLoading, leaveList, setShowModal, showModal } = useLeave();

  if (isLeaveLoading) return <Loader />

  return (
    <section className="space-y-8">

      <LeaveHeader 
        title="Leave Management"
        description="Your leave history and requests"
        isBtn={true}
        setShowModal={setShowModal}
      />

      <LeaveStats />

      <DataTable 
        columns={[
          { header: 'Type', render: (row) => <span className="badge"> {row.type} </span> },
          { header: 'Dates', render: (row) => formatRange(row.startDate, row.endDate) },
          { header: 'Reason', field: 'reason' },
          { header: 'Status', render: (row) => (
            <StatusBadge 
              status={row.status}
            />
          )},
        ]}
        data={leaveList}
      />

      {showModal && <AddLeaveModal setShowModal={setShowModal} />}

    </section>
  )
}

export default EmployeeLeave;
