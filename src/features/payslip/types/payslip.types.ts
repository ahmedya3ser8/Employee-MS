export type PayslipDetailsHeaderProps = {
  month: number;
  year: number;
}

export type PayslipDetailsInfoProps = {
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  month: number;
  year: number;
}

export type PayslipDetailsTableProps = {
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
}

export type PayslipHeaderProps = {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string;
  isAdmin?: boolean;
}
