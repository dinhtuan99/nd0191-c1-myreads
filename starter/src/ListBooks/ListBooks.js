import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const ListBooks = ({books, onUpdateBook}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf title="Currently Reading" onUpdateBook={onUpdateBook} books={books.filter(book => book.shelf === "currentlyReading")}></BookShelf>
        <BookShelf title="Want to Read" onUpdateBook={onUpdateBook} books={books.filter(book => book.shelf === "wantToRead")}></BookShelf>
        <BookShelf title="Read" onUpdateBook={onUpdateBook} books={books.filter(book => book.shelf === "read")}></BookShelf>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default ListBooks;
