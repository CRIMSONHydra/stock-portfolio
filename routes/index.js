const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index', { stocks: [] });
});

// Additional routes can be added here
// e.g., router.post('/add-stock', (req, res) => { ... });

module.exports = router;
