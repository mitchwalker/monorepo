import { APP_VERSION } from "@monorepo/shared";

const response = await fetch("http://localhost:3000");
const version = await response.text();

if (version !== APP_VERSION) {
  console.error("Client and Server Version Mismatch: %s != %s", APP_VERSION, version);
}
else {
  console.log("Client and Server running version %s", version);
}
