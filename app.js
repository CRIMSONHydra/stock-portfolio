const express = require("express");
const path = require("path");
const app = express();

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files from 'public'
app.use(express.static(path.join(__dirname, "public")));

// Parse JSON and URL-encoded bodies (for POST requests)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes (if using a separate routes file)
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Basic route for the homepage
app.get("/", (req, res) => {
  // Pass an empty stocks array (or fetch real data) to the EJS template
  res.render("index", { stocks: [] });
});

// Example API endpoint for future expansion
app.get("/api/stocks", (req, res) => {
  // Here, you would typically call your stock API (Alpha Vantage or Yahoo Finance)
  // and return the data in JSON format
  res.json({ message: "This will be your stocks API endpoint." });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
