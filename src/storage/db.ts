import sqlite3 from "sqlite3";
export const db = new sqlite3.Database(":memory:");
db.run("CREATE TABLE IF NOT EXISTS jokes (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT)");