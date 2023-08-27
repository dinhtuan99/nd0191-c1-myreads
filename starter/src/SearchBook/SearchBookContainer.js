import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchBookBar from "./SearchBookBar"
import SearchBookResult from "./SearchBookResult"


const SearchBookContainer = ({books, onSearchBooks, onUpdateBook}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
        Close
        </Link>
        <SearchBookBar onSearchBooks={onSearchBooks}></SearchBookBar>
      </div>
      <SearchBookResult books={books} onUpdateBook={onUpdateBook}></SearchBookResult>
    </div>
  );
};

SearchBookContainer.prototype = {
  books: PropTypes.array.isRequired,
  onSearchBooks: PropTypes.func.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default SearchBookContainer;
