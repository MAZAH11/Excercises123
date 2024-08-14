const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for Exercise 1
app.get('/exercise1', (req, res) => {
    res.sendFile(path.join(__dirname, 'exercise1', 'index.html'));
});

// Route for Exercise 2
app.get('/exercise2', (req, res) => {
    res.sendFile(path.join(__dirname, 'exercise2', 'index.html'));
});

// Route for Exercise 3
app.get('/exercise3', (req, res) => {
    res.sendFile(path.join(__dirname, 'exercise3', 'index.html'));
});

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3040;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
