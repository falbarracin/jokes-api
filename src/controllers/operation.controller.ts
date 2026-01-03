import { Request, Response, NextFunction } from "express";
import * as mathService from "../services/operation.service";
import { BadRequestError } from "../errors/BadRequestError";

export async function getLCM(req: Request, res: Response, next: NextFunction) {
  try {
    const numbersParam = req.query.numbers as string;
    if (!numbersParam){
        throw new BadRequestError("Numbers query param required");
    } 

    const numbers = numbersParam.split(",").map(Number);
    const result = mathService.calculateLCM(numbers);

    res.status(200).json({ status: 200, data: { lcm: result } });
  } catch (err) {
    next(err); 
  }
}

export async function incrementNumber(req: Request, res: Response, next: NextFunction) {
  try {
    const numberParam = req.query.number as string;
    if (!numberParam){
         throw new BadRequestError("Number query param required");
    }

    const num = Number(numberParam);
    const result = mathService.increment(num);

    res.status(200).json({ status: 200, data: { result } });
  } catch (err) {
    next(err); 
  }
}