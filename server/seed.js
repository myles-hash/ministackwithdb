import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS messages (
    username TEXT,
    message TEXT
)
`);

db.prepare(`INSERT INTO messages (username, message) VALUES (?, ?)`).run(
    "Bingus",
    "I so pale"
  );