import type { IconType } from "react-icons/lib";

type StatsCardProps = {
  title: string;
  value: React.ReactNode;
  Icon: IconType
}

const StatsCard = ({ title, value, Icon }: StatsCardProps) => {
  return (
    <div className="border border-[#E2E8F0] rounded-lg p-6 flex items-center justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
      <div className="absolute w-1 h-full bg-[#62748EB2] left-0 rounded-tr-2xl rounded-br-2xl transition-all duration-500 group-hover:bg-indigo-500/70"></div>
      <div className="space-y-1">
        <h4 className="text-sm text-[#314158] font-medium"> {title} </h4>
        <span className="text-2xl font-bold text-[#0F172B]"> {value} </span>
      </div>
      <div className="size-10 bg-slate-100 transition-all duration-500 group-hover:bg-indigo-50 flex items-center justify-center rounded-md">
        <Icon size={22} className="text-slate-600 transition-all duration-500 group-hover:text-indigo-500" />
      </div>
    </div>
  )
}

export default StatsCard;
