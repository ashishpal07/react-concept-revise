import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string({ message: 'username should be string.' }).min(3),
  password: z.string({ message: 'password must be in string' }).min(5),
  email: z.string({ message: 'email should be in email string' }).email({ message: 'user@example.com' })
});
