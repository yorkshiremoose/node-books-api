require('express-async-errors');

const express = require('express');
const app = express();
const PORT = 3000;

const booksRouter = require('./routes/books');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// routes
app.get('/', (req, res) => {
    res.send('<h1>Books API</h1><a href="/api/v1/books">books route</a>');
})

app.use('/api/v1/books', booksRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
    try {
        app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();
