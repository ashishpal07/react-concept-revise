import { Response, Request } from "express";
import { createTagSchema } from "../types/tag.type";
import { Tag } from "../models/tag.model";

export const create = async (req: Request, res: Response) => {
  try {
    const parseData = createTagSchema.safeParse(req.body);
    if (!parseData.success) {
      return res.status(400).json({ message: parseData.error });
    }

    const tag = await Tag.create({ ...parseData.data });
    return res.status(201).json({ message: "Tag Created Successfully.", tag });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: "Error while creating tag "+ error.message });
    }
    return res.status(500).json({ message: "Error while creating tag."});
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const { tagId } = req.params;
    const parseData = createTagSchema.safeParse(req.body);
    if (!parseData.success) {
      return res.status(400).json({ message: parseData.error });
    }

    const update = await Tag.findByIdAndUpdate(
      tagId,
      { ...parseData.data },
      { new: true }
    );

    return res.status(201).json({ message: "Tag Updated Successfully.", tag: update })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: "Error while updating tag "+ error.message });
    }
    return res.status(500).json({ message: "Error while updating tag."});
  }
}

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const { tagId } = req.params;

    const deleteOne = await Tag.findByIdAndDelete(tagId);

    if (!deleteOne) {
      return res.status(404).json({ message: "Tag Not Found" });
    }

    return res.status(201).json({ message: "Tag Deleted Successfully.", tag: deleteOne });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: "Error while deleting tag "+ error.message });
    }
    return res.status(500).json({ message: "Error while deleting tag."});
  }
}

export const getAll = async (req: Request, res: Response) => {
  try {
    const tags = await Tag.find({});
    return res.status(200).json({ message: "Success", tags });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: "Error while get all tag "+ error.message });
    }
    return res.status(500).json({ message: "Error while get all tag."});
  }
}
