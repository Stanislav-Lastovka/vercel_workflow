import { sleep } from "workflow";

export async function createState() {
  "use step";
  console.log("[State] Creating state...");

  sleep(10000);
}
