import { db } from "../storage/db";

export const jokeRepository = {
  async create(text: string) {
    return new Promise(resolve => {
      db.run("INSERT INTO jokes(text) VALUES (?)", [text], function() {
        resolve({ id: this.lastID, text });
      });
    });
  },

  async update(id: number, text: string) {
    return new Promise<boolean>(resolve => {
      db.run("UPDATE jokes SET text=? WHERE id=?", [text, id], function() {
        resolve(this.changes > 0);
      });
    });
  },

  async delete(id: number) {
    return new Promise<boolean>(resolve => {
      db.run("DELETE FROM jokes WHERE id=?", [id], function() {
        resolve(this.changes > 0);
      });
    });
  }
};