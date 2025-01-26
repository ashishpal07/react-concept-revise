import { Account } from "../models/account.model.js";
import { z } from "zod";

export async function getBalance(req, res) {
  try {
    const userId = req.user;

    const account = await Account.findOne({ userId: userId });

    return res.status(200).json({ balance: account.balance });
  } catch (error) {
    return res.status(500).json({
      message: "Error while fetching user balance",
    });
  }
}

export async function transfer(req, res) {
  try {
    const parseData = transferBalanceSchema.safeParse(req.body);
    if (!parseData.success) {
      return res.status(400).json({ message: "Invalid Input." });
    }

    session.startTransaction();
    const { amount, to } = req.body;

    const account = await Account.findOne({ userId: req.userId }).session(
      session
    );

    if (!account || account.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Invalid account",
      });
    }

    // Perform the transfer
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);
    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    // Commit the transaction
    await session.commitTransaction();

    return res.json({
      message: "Transfer successful",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error ehile transfering balance." });
  }
}
