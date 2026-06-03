import { createState } from "./steps/createState";

export async function upsert() {
    "use workflow";

    createState();
}
