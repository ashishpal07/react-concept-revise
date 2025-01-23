import { z } from "zod";

export const creteLinkSchema = z.object({
  uniqueId: z
    .string({ message: "unique is should be a string." })
    .min(5, { message: "unique id should have atlease 5 characters" }),
});
