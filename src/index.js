import express from "express";
import randomName from "node-random-name"
import db from "./connection.js";

const app = express()
const port = 3000

app.get('/', async (req, res) => {
    await db.newName(randomName({ first: true }));
    const names = await db.getNames();

    res.send(`<h1>Full Cycle</h1> <p>${names.join('</br>')}</p>`);
});

app.listen(port, () => console.log(`Rodando na porta ${port}`));
