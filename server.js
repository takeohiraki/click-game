// Dependencies
// =============================================================

const express = require("express");

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets.
  // Like main.js file or main.css file! (React)
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Starts the server to begin listening
// =============================================================
// PORT 5000 for DEV Server
// PORT 3000 for DEV Client
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));