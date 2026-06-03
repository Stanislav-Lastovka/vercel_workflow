import { start } from "workflow/api";
import { upsert } from "./workflows/index";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    return res.status(200).json({ message: 'hello' });
});

app.post("/upsert", async (req, res) => {
    const run = await start(upsert);
    return res.status(200);
});

export default app;
