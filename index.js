const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Route for Julie
app.get('/julie', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/julie.jpg'));
});

// Route for Sophia
app.get('/sophia', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/sophia.jpg'));
});

// Route for Sean
app.get('/sean', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/sean.jpg'));
});

// Default route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Julie/Sophia/Sean image API",
    endpoints: [
      { path: "/julie", description: "Julie's image" },
      { path: "/sophia", description: "Sophia's image" },
      { path: "/sean", description: "Sean's image" }
    ]
  });
});

module.exports = app;
