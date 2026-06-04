import { createState } from "./steps/createState.js";
import { persistDocument } from "./steps/persistDocument.js";

export async function upsert() {
    "use workflow";

    await createState();
    await persistDocument();
}
