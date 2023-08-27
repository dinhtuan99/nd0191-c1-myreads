import PropTypes from "prop-types";
import { DebounceInput } from 'react-debounce-input'

const SearchBookBar = ({ onSearchBooks }) => {
  const updateQuery = (querySearch) => {
    const trimedQuery = querySearch.trim();
    onSearchBooks(trimedQuery);
  };

  return (
    <div className="search-books-input-wrapper">
      <DebounceInput
        onChange={(event) => updateQuery(event.target.value)}
        debounceTimeout={500}
        placeholder="Search by title, author, or ISBN"
      />
    </div>
  );
};

SearchBookBar.prototype = {
  onSearchBooks: PropTypes.func.isRequired
};

export default SearchBookBar;
