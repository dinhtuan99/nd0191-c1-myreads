import PropTypes from "prop-types";
import Book from "../Common/Book";

const BookShelf = ({ title, books, onUpdateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 && books.map((book) => (
            <Book book={book} onUpdateBook={onUpdateBook} key={book.id}></Book>
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.prototype = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookShelf;
