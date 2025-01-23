import { z } from "zod";

export const createContentSchema = z.object({
  type: z.enum(["image", "video", "article", "audio"], {
    message: "Type should be exist",
  }),
  link: z
    .string({ message: "Link should be in string." })
    .nonempty({ message: "Link should not be empty." }),
  title: z
    .string({ message: "Title should be in string." })
    .nonempty({ message: "Title should not be empty." }),
  tags: z
    .string()
    .array()
    .nonempty({ message: "Tags array should not be empty" })
    .min(1, { message: "Tags array must contains 1 element" }),
});

export const updateContentSchema = z.object({
  type: z
    .enum(["image", "video", "article", "audio"], {
      message: "Type should be exist",
    })
    .optional(),
  link: z
    .string({ message: "Link should be string." })
    .nonempty({ message: "Link should not be empty." })
    .optional(),
  title: z
    .string({ message: "Title should be string." })
    .nonempty({ message: "Title should not be empty." })
    .optional(),
  tags: z
    .string()
    .array()
    .nonempty({ message: "Tags array should not be empty" })
    .min(1, { message: "Tags array must contains 1 element" })
    .optional(),
});
