const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// GET test route 
// always delete
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

// always at end before start Express.js
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// start Express.js
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});