import { string, object, boolean } from 'zod';

export const loginSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    // .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const registerSchema = object({
  username: string().min(4, 'Username must at least have 4 characters'),
  password: string().min(4, 'Password must at least have 4 characters'),
  firstName: string(),
  middleName: string(),
  lastName: string(),
  email: string().email(),
  birthdate: string().date(),
  gender: string(),
  checkbox: boolean()
})