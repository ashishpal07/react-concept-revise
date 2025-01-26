
export const transferBalanceSchema = z.object({
  to: z
    .string({ message: "username should be in string." }),
  amount: z.int({ message: "balance should be in integer." }),
});
