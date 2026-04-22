import z from "zod";

export const payslipSchema = z.object({
  month: z.number({ error: 'Month is required' }),
  year: z.number({ error: 'Year is required' }),
  basicSalary: z.number().min(1, 'Basic salary is required'),
  allowances: z.number().optional(),
  deductions: z.number().optional(),
  employee: z.string({ error: 'Employee is required' })
})

export type PayslipFormValues = z.infer<typeof payslipSchema>;
