import Database from "better-sqlite3";
const db = new Database("database.db");

import express from "express";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(request,response) => {
    response.json('Looking at root route!')
});


app.get("/messages",(request,response) => {
    const messages = db.prepare("SELECT * FROM messages").all();
    response.json(messages);
});

app.post("/messages", (request,response) => {
    const username = request.body.username;
    const message = request.body.message;
    const newMessage = db.prepare (`INSERT INTO messages (username,message) VALUES (?,?)`).run(username,message);
    response.json(newMessage);
});


app.listen(8080, () => {
    console.log("Server 8080 is working!");
})