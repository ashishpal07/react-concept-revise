import { Request, Response } from "express";
import { createContentSchema } from "../types/content.type";
import { Content } from "../models/content.model";

export const create = async (req: Request, res: Response) => {
  try {
    const parseData = createContentSchema.safeParse(req.body);
    if (!parseData.success) {
      return res.status(400).json({ message: parseData.error.message });
    }

    const createContent = await Content.create({
      ...parseData.data,
      user: req.user,
    });
    return res.status(201).json({
      message: "Content Created Successfully",
      content: createContent,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: "Error while create content " + error.message });
    }
    return res
      .status(500)
      .json({ message: "Something Went Wrong while create content." });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { contentId } = req.params;

    const parseData = createContentSchema.safeParse(req.body);
    if (!parseData.success) {
      return res.status(400).json({ message: parseData.error.message });
    }

    const updateContent = await Content.findByIdAndUpdate(
      contentId,
      { ...parseData },
      { new: true }
    );

    if (!updateContent) {
      return res.status(404).json({ message: "Content Not Found." });
    }

    return res.status(201).json({
      message: "Content Updated Successfully",
      content: updateContent,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: "Error while updating content " + error.message });
    }
    return res
      .status(500)
      .json({ message: "Something Went Wrong while updateing content." });
  }
};

export const deleteContent = async (req: Request, res: Response) => {
  try {
    const { contentId } = req.params;
    const findAndDelete = await Content.findByIdAndDelete(contentId);

    if (!findAndDelete) {
      return res.status(404).json({ message: "Content Not Found" });
    }

    return res.status(200).json({ message: "Content Deleted Successfully." });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: "Somthing went wrong while deleteing content" + error.message,
      });
    }
    return res
      .status(500)
      .json({ message: "Somthing went wrong while deleteing content" });
  }
};

export const getSingle = async (req: Request, res: Response) => {
  try {
    const { contentId } = req.params;

    const content = await Content.findById(contentId);
    if (!content) {
      return res.status(404).json({ message: "Content Not Found" });
    }

    return res.status(200).json({  message: "Success" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: "Somthing went wrong while get single content" + error.message,
      });
    }
    return res
      .status(500)
      .json({ message: "Somthing went wrong while get single content" });
  }
};
