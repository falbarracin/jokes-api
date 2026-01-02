import { Request, Response, NextFunction } from "express";
import * as jokesService from "../services/jokes.service";

export async function getJoke(req: Request, res: Response, next: NextFunction) {
  try {
    const joke = await jokesService.getJoke(req.params.type);
    res.status(200).json({
      status: 200,
      data: joke
    });
  } catch (err) {
    next(err);
  }
}

export async function createJoke(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.body.text) throw { status: 400, message: "Text is required" };
    const joke = await jokesService.saveJoke(req.body.text);
    res.status(201).json({
      status: 201,
      data: joke
    });
  } catch (err) {
    next(err);
  }
}

export async function updateJoke(req: Request, res: Response, next: NextFunction) {
  try {
    await jokesService.updateJoke(Number(req.params.number), req.body.text);
    res.status(200).json({
      status: 200,
      message: "Updated"
    });
  } catch (err) {
    next(err);
  }
}

export async function deleteJoke(req: Request, res: Response, next: NextFunction) {
  try {
    await jokesService.deleteJoke(Number(req.params.number));
    res.status(200).json({
      status: 200,
      message: "Deleted"
    });
  } catch (err) {
    next(err);
  }
}