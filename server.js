const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'H&NsTi0SeEzUR',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

// GET test route 
// always delete
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
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