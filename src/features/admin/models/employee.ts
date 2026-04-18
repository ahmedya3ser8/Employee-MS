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
