const getAllBooks = async (req, res) => {
    res.status(200).json({ msg: 'books route' });
}

const getAllBooksStatic = async (req, res) => {
    res.status(200).json({ msg: 'books testing route' });
}

module.exports = {
    getAllBooks,
    getAllBooksStatic
}