import { sleep } from "workflow";

export async function createState() {
  "use step";
  console.log("[State] Creating state...");

  await sleep("10s");
}
