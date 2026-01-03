import { Joke } from "../models/Joke";

export async function create(text: string) {
  return Joke.create({ text });
}

export async function update(id: number, text: string): Promise<boolean> {
  const [affected] = await Joke.update(
    { text },
    { where: { id } }
  );

  return affected === 1;
}

export async function remove(id: number): Promise<boolean> {
  const affected = await Joke.destroy({ where: { id } });
  return affected === 1;
}

export async function findRandom() {
  return Joke.findOne({
    order: [Joke.sequelize!.random()],
  });
}