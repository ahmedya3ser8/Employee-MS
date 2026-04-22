import z from "zod";

export const leaveSchema = z.object({
  type: z.enum(["casual","annual","sick"], {
    error: 'Leave type must be casual, annual or sick'
  }),
  startDate: z.string().min(1, 'Leave startDate is required'),
  endDate: z.string().min(1, 'Leave endDate is required'),
  reason: z.string().min(1, 'Leave reason is required')
})

export type LeaveFormValues = z.infer<typeof leaveSchema>;
