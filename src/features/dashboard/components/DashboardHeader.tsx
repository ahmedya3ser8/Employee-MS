
type DashboardHeaderProps = {
  title: string;
  description: string;
}

const DashboardHeader = ({ title, description }: DashboardHeaderProps) => {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-medium text-[#0F172B]"> 
        {title}
      </h1>
      <p className="text-sm text-[#62748E]">
        {description}
      </p>
    </div>
  )
}

export default DashboardHeader;
