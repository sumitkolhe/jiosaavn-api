import { RequestHandler } from "express";

export const hello: RequestHandler = async (_req, res, next) => {
  try {
    res.json("Hello from the other side");
  } catch (error) {
    next(error);
  }
};
