import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const initDB = async () => {
    const db = await open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
    });

    // Create tables if they don't exist
    await db.exec(`
    CREATE TABLE IF NOT EXISTS blogs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      image TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

    return db;
};
