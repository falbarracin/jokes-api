import axios from "axios";
import { BadRequestError } from "../errors/BadRequestError";
import { ExternalServiceError } from "../errors/ExternalServiceError";
import { jokeRepository } from "../repositories/jokes.repository";
import { API_URLS } from "../config/apiUrls"; 

const JOKE_TYPES = {
  CHUCK: "chuck",
  DAD: "dad"
} as const;

/**
 * Retrieves a joke based on the requested type. *
 * @param type Optional joke type ("Chuck" | "Dad")
 * @returns An object containing the joke text
 * @throws BadRequestError If the joke type is invalid
 * @throws ExternalServiceError If the external API request fails
 */
export async function getJoke(type?: string) {
  if (!type) return { joke: "Random local joke" };

  const normalizedType = type.toLowerCase();

  try {
    if (normalizedType === JOKE_TYPES.CHUCK) {
      const r = await axios.get(API_URLS.CHUCK);
      return { joke: r.data.value };
    }

    if (normalizedType === JOKE_TYPES.DAD) {
      const r = await axios.get(API_URLS.DAD, {
        headers: { Accept: "application/json" }
      });
      return { joke: r.data.joke };
    }

    throw new BadRequestError("Invalid joke type");
  } catch (error: any) {
        if (error instanceof BadRequestError) throw error;
        throw new ExternalServiceError(type || "unknown");
  }
}

/**
 * Persists a new joke in the data store.
 *
 * @param text Joke content to be saved
 * @returns The newly created joke entity
 */
export async function saveJoke(text: string) {
  return jokeRepository.create(text);
}

/**
 * Updates an existing joke identified by its ID.
 *
 * @param id Joke identifier
 * @param text New joke content
 * @throws BadRequestError If the joke does not exist
 */
export async function updateJoke(id: number, text: string) {
  const updated = await jokeRepository.update(id, text);
  if (!updated) throw new BadRequestError("Joke not found");
}

/**
 * Deletes a joke by its ID.
 *
 * @param id Joke identifier
 * @throws BadRequestError If the joke does not exist
 */
export async function deleteJoke(id: number) {
  const deleted = await jokeRepository.delete(id);
  if (!deleted) throw new BadRequestError("Joke not found");
}