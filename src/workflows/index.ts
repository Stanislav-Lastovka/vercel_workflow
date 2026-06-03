import { createState } from "./steps";

export async function upsert() {
    "use workflow";

    createState();
}