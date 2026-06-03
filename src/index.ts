import { start } from "workflow/api";
import { upsert } from "./workflows";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/upsert", async (req, res) => {
    const run = await start(upsert);
});

export default app;