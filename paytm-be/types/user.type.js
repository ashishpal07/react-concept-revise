import { z } from "zod";

export const createUserSchema = z.object({
  username: z
    .string({ message: "username should be in string." })
    .min(3, { message: "username must be of 3 chars." }),
  password: z
    .string({ message: "password must be an string." })
    .min(5, { message: "password must be of length 5 chars." }),
  firstName: z
    .string({ message: "firstname must be an string." })
    .min(3, { message: "firstname must be 3 chars." }),
  lastName: z
    .string({ message: "lastName must be an string." })
    .min(3, { message: "last name must be of 3 chars." }),
});

export const loginUserSchema = z.object({
  username: z
    .string({ message: "username should be in string." })
    .min(3, { message: "username must be of 3 chars." }),
  password: z
    .string({ message: "password must be an string." })
    .min(5, { message: "password must be of length 5 chars." }),
});
