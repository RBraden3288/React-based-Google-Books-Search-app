const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

//routes: 1.) /routes/index.js -> 2.) /routes/api/index.js -> 3.)routes/api/books.js = 
    // /api + /books + / or /:id