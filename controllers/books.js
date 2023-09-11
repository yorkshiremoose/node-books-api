const books = require('../books.json');

const getAllBooks = async (req, res) => {
    res.status(200).json({ msg: 'books route' });
}

const getAllBooksStatic = async (req, res) => {
    res.status(200).json({ books });
}

module.exports = {
    getAllBooks,
    getAllBooksStatic
}