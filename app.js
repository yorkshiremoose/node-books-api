const express = require('express');
const app = express();
const PORT = 3000;

const booksRouter = require('./routes/books');

// routes
app.get('/', (req, res) => {
    res.send('<h1>Books API</h1><a href="/api/v1/books">books route</a>');
})

app.use('/api/v1/books', booksRouter);

const start = async () => {
    try {
        app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();
