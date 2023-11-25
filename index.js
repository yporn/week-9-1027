const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = 3000;
const envName =
  process.env.ENV_NAME === "" ? "not found" : process.env.ENV_NAME;

// Define a route that responds with "Hello, World!"
app.get("/", (req, res) => {
  console.log(JSON.stringify({ path: "/", envName: envName }));
  res.send("Hello, World!!!! this is new version --> " + envName);
});

app.get("/app", (req, res) => {
  res.send("oh no app");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
