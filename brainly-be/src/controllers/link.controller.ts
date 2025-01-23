import { Request, Response } from "express";
import { Link } from "../models/link.model";
import { UUIDTypes } from "uuid";
import { creteLinkSchema } from "../types/link.type";

export const create = async (req: Request, res: Response) => {
  try {
    const parseData = creteLinkSchema.safeParse(req.body);
    if (!parseData.success) {
      return res.status(400).json({ message: parseData.error });
    }

    const createLink = await Link.create({ ...parseData.data, user: req.user });
    return res
      .status(200)
      .json({ message: "Link Created Successfully.", createLink });
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: "Error while creating link " + error.message });
    }
    return res.status(500).json({ message: "Error while creating link." });
  }
};

export const deleteLink = async (req: Request, res: Response) => {
  try {
    const { linkId } = req.params;

    const deleteLink = await Link.findByIdAndDelete(linkId);
    if (!deleteLink) {
      return res.status(404).json({ message: "Link Not Found." });
    }

    return res
      .status(200)
      .json({ message: "Link Deleted Successfully", link: deleteLink });
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: "Error while deleting link " + error.message });
    }
    return res.status(500).json({ message: "Error while deleting link." });
  }
};

export const getSingle = async (req: Request, res: Response) => {
  try {
    const { linkId } = req.params;

    const link = await Link.findById(linkId);
    if (!link) {
      return res.status(404).json({ message: "Link Not Found." });
    }

    return res
      .status(200)
      .json({ message: "Link Deleted Successfully", link });
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: "Error while deleting link " + error.message });
    }
    return res.status(500).json({ message: "Error while deleting link." });
  }
};
