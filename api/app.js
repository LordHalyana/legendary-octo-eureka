const express = require('express');

const app = express();
const path = require("path");

const port = process.env.PORT || 4000;


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "<Backend OK>!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);