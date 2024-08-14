const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.post('/submit', (req, res) => {
    const { name, phone } = req.body;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (phoneRegex.test(phone)) {
        res.send(`Hello, ${name}. Your phone number ${phone} is valid.`);
    } else {
        res.send(`Hello, ${name}. The phone number ${phone} is not in the correct format.`);
    }
});

app.listen(3020, () => {
    console.log('Server is running on http://localhost:3020');
});
