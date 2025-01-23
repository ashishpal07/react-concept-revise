import { z } from "zod";

export const createTagSchema = z.object({
  name: z
    .string({ message: "name should be in string." })
    .min(3, { message: "name should have atleast 3 characters." }),
});

export const updateTagSchema = z.object({
  name: z
    .string({ message: "name should be in string." })
    .min(3, { message: "name should have atleast 3 characters." }),
});
