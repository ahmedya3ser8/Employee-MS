import z from "zod";

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

export const baseEmployeeSchema = z.object({
  firstName: z.string().trim().min(2, "FirstName must be at least 2 characters").max(30, "FirstName must be at most 30 characters"),
  lastName: z.string().trim().min(2, "LastName must be at least 2 characters").max(30, "LastName must be at most 30 characters"),
  phoneNumber: z.string().min(1, 'PhoneNumber is required').regex(/^01[0125][0-9]{8}$/, 'PhoneNumber must start with 010, 011, 012, or 015 and be 11 digits'),
  bio: z.string().max(500, "Bio must not exceed 500 characters").optional(),
  department: z.enum(DEPARTMENTS, {
    error: 'Invalid department'
  }),
  position: z.string().trim().min(2, "Position must be at least 2 characters").max(30, "Position must be at most 30 characters"),
  basicSalary: z.number().nonnegative().min(1, 'BasicSalary is required'),
  allowances: z.number().nonnegative().optional(),
  deductions: z.number().nonnegative().optional(),
  email: z.email('Invalid email address'),
  role: z.enum(['employee','admin'], {
    error: 'Role must be admin or employee'
  })
});

export const createEmployeeSchema = baseEmployeeSchema.extend({
  password: z.string().min(6, "Password must be at least 6 characters")
});

export const updateEmployeeSchema = baseEmployeeSchema.extend({
  password: z.string().min(6, "Password must be at least 6 characters").optional()
});

export type EmployeeFormValues = z.infer<typeof updateEmployeeSchema>;
