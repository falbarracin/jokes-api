import { BadRequestError } from "../errors/BadRequestError";
import { InternalError } from "../errors/InternalError";

/**
 * Calculate the least common multiple of an array of numbers.
 * @param numbers Array de números
 * @returns Mínimo Común Múltiplo
 * @throws BadRequestError si el array está vacío o contiene valores no numéricos
 */
export function calculateLCM(numbers: number[]): number {
  try {
    if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
        throw new BadRequestError("No numbers provided");
    }

    if (!numbers.every((n) => typeof n === "number" && Number.isInteger(n))) {
        throw new BadRequestError("All values must be integers");
    }

    const gcd = (a: number, b: number): number => (!b ? a : gcd(b, a % b));
    const lcm = (a: number, b: number): number => Math.abs((a * b) / gcd(a, b));
    
    return numbers.reduce((acc, curr) => lcm(acc, curr));
  } catch (err) {
    throw new InternalError("Error calculating LCM: " + err);
  }
}

/**
 * Increase a number by 1
 * @param num Número a incrementar
 * @returns num + 1
 * @throws BadRequestError si num no es un número entero
 */
export function increment(num: number): number {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    throw new BadRequestError("Input must be an integer");
  }
  return num + 1;
}