import { getJoke } from "../services/jokes.service";

test("returns random joke when no type", async () => {
  const joke = await getJoke();
  expect(joke).toHaveProperty("joke");
});

test("throws error for invalid type", async () => {
  await expect(getJoke("Invalid")).rejects.toThrow("Invalid joke type");
});