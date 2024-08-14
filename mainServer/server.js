const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Proxy setup for Exercise 1
app.use('/exercise1', createProxyMiddleware({ 
    target: 'https://excercises123-1.onrender.com/exercise1', // Replace with actual domain
    changeOrigin: true 
}));

// Proxy setup for Exercise 2
app.use('/exercise2', createProxyMiddleware({ 
    target: 'https://excercises123-1.onrender.com/exercise2', // Replace with actual domain
    changeOrigin: true 
}));

// Proxy setup for Exercise 3
app.use('/exercise3', createProxyMiddleware({ 
    target: 'https://excercises123-1.onrender.com/exercise3', // Replace with actual domain
    changeOrigin: true 
}));


// Serve a simple home page with links to each exercise
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
});

// Start the main server
const PORT = process.env.PORT || 3040;
app.listen(PORT, () => {
    console.log(`Main server running on http://localhost:${PORT}`);
});
