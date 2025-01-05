// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for comments
app.get('/comments', (req, res) => {
  res.json([
    {
      id: 1,
      comment: 'Hello'
    },
    {
      id: 2,
      comment: 'World'
    }
  ]);
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});