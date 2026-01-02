import axios from "axios";
import { BadRequestError } from "../errors/BadRequestError";
import { ExternalServiceError } from "../errors/ExternalServiceError";
import { jokeRepository } from "../repositories/jokes.repository";
import { API_URLS } from "../config/apiUrls"; 

export async function getJoke(type?: string) {
  if (!type) return { joke: "Random local joke" };

  try {
    if (type === "Chuck") {
      const r = await axios.get(API_URLS.CHUCK);
      return { joke: r.data.value };
    }

    if (type === "Dad") {
      const r = await axios.get(API_URLS.DAD, { headers: { Accept: "application/json" } });
      return { joke: r.data.joke };
    }

    throw new BadRequestError("Invalid joke type");
  } catch (error: any) {
    if (error instanceof BadRequestError) throw error;
    throw new ExternalServiceError(type || "unknown");
  }
}

export async function saveJoke(text: string) {
  return jokeRepository.create(text);
}

export async function updateJoke(id: number, text: string) {
  const updated = await jokeRepository.update(id, text);
  if (!updated) throw new BadRequestError("Joke not found");
}

export async function deleteJoke(id: number) {
  const deleted = await jokeRepository.delete(id);
  if (!deleted) throw new BadRequestError("Joke not found");
}