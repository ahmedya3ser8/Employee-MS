import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { EmployeeFormValues } from "../validations/employee.schema";

export interface IEmployee {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  bio: string;
  department: string;
  position: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  isActive: boolean;
  user: {
    _id: string;
    email: string;
    role: 'admin' | 'employee';
  };
  createdAt: Date;
  updatedAt: Date;
};

export interface IEmployeeForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  bio?: string;
  department: string;
  position: string;
  basicSalary: number;
  allowances?: number;
  deductions?: number;
  role: 'admin' | 'employee';
  email: string;
  password?: string;
};

export interface IEmployeeResponse {
  success: boolean;
  message: string;
  data: IEmployee[];
};

export type EmployeeCardProps = {
  handleDeleteEmployee: (employee: string) => void;
  employee: IEmployee
}

export type EmployeeFiltersProps = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDepartment: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type EmployeeFormActionsProps = {
  loading: boolean;
  isEditMode: boolean;
}

export type AccountSetupProps = {
  register: UseFormRegister<EmployeeFormValues>;
  errors: FieldErrors<EmployeeFormValues>;
  isEditMode: boolean;
}

export type EmployeeDetailsProps = {
  register: UseFormRegister<EmployeeFormValues>;
  errors: FieldErrors<EmployeeFormValues>;
}

export type EmployeeListProps = {
  employeeList: IEmployee[];
  handleDeleteEmployee: (employeeId: string) => Promise<void>;
  loading: boolean;
}

export type PersonalInfoProps = {
  register: UseFormRegister<EmployeeFormValues>;
  errors: FieldErrors<EmployeeFormValues>;
}

export const DEPARTMENTS = [
  'Engineering',
  'Human Resources',
  'Marketing',
  'Sales',
  'Finance',
  'Operations',
  'IT Support',
  'Product Management',
  'Design'
];