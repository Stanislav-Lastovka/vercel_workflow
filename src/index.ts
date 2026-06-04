import { start } from "workflow/api";
import { upsert } from "./workflows/index.js";
import express from "express";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    return res.status(200).json({ message: 'hello' });
});

app.post("/upsert", async (req, res) => {
    const run = await start(upsert);
    return res.status(200).json({ message: "Upsert workflow started", runId: run.runId });
});

export default app;
