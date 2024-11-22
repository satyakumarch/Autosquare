const express = require('express');
const router = express.Router();

// Sample data to return from the API
const sampleData = [
  { message: 'Hello from the server!' },
  { message: 'This is another message.' },
];

// GET endpoint to fetch data
router.get('/', (req, res) => {
  res.json(sampleData);
});

module.exports = router;