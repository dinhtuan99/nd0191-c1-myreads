import PropTypes from "prop-types";
import Book from "../Common/Book";

const SearchBookResult = ({ books, onUpdateBook }) => {
  console.log(books);
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.length > 0 &&
          books.map((book) => <Book book={book} key={book.id} onUpdateBook={onUpdateBook}></Book>)}
      </ol>
    </div>
  );
};

SearchBookResult.prototype = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default SearchBookResult;
