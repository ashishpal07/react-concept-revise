import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .email({ message: "email should contains @ and domain.com." }),
  userName: z
    .string({ message: "user name must be string." })
    .min(3, { message: "user name must have 3 characters." }),
  password: z
    .string({ message: "password must be string." })
    .min(6, { message: "password must be 6 chnaracters." }),
});

export const loginSchema = z.object({
  userName: z
    .string({ message: "user name must be of type string." })
    .min(3, { message: "user name length must be 3 characters." })
    .optional(),
  email: z
    .string()
    .email({ message: "email should contain @ and domain.com." })
    .optional(),
  password: z
    .string({ message: "password must be of type string." })
    .min(6, { message: "password must contain at least 6 characters." }),
})
.refine((data) => data.email || data.userName, {
  message: "Either username or email is required.",
  path: ["email", "userName"],
});
