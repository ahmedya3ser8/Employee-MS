import z from "zod";

export const profileSchema = z.object({
  firstName: z.string().trim().min(2, "FirstName must be at least 2 characters").max(30, "FirstName must be at most 30 characters"),
  lastName: z.string().trim().min(2, "LastName must be at least 2 characters").max(30, "LastName must be at most 30 characters"),
  position: z.string().trim().min(2, "Position must be at least 2 characters").max(30, "Position must be at most 30 characters"),
  email: z.email('Invalid email address'),
  bio: z.string().optional()
});

export type ProfileFormValues = z.infer<typeof profileSchema>;

export const passwordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string().min(6, "Password must be at least 6 characters")
});

export type PasswordFormValues = z.infer<typeof passwordSchema>;
