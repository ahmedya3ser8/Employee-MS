
type Column<T> = {
  header: string;
  field?: keyof T;
  render?: (row: T) => React.ReactNode;
}

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
}

const DataTable = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <div className="w-full overflow-x-auto border border-slate-200 rounded-md shadow-sm">
      <table className="min-w-5xl w-full">
        <thead>
          <tr className="border-b border-slate-200 text-[#62748E] bg-slate-50 text-xs uppercase text-left">
            {columns.map((col) => (
              <th key={col.header} className="px-6 py-4">
                {col.header}
              </th>
            ))}          
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-slate-200 text-[#62748E] text-sm transition-all duration-300 hover:bg-slate-50 last:border-none">
              {columns.map((col) => (
                <td key={col.header} className={`px-6 py-4 ${col.header === 'Employee' && 'text-[#1D293D] capitalize'} ${col.header === 'Net Salary' && 'text-[#1D293D] font-medium'} ${col.header === 'Dates' && 'text-xs'}`}> 
                  {col.render ? col.render(row) : String(row[col.field as keyof T]) }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;
