import { createState } from "./steps/createState.js";

export async function upsert() {
    "use workflow";

    await createState();
}
