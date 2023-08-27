import PropTypes from "prop-types";

const SearchBookBar = ({ onSearchBooks }) => {
  const updateQuery = (querySearch) => {
    const trimedQuery = querySearch.trim();
    if(trimedQuery === ""){
      return;
    }
    onSearchBooks(trimedQuery);
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        onChange={(event) => updateQuery(event.target.value)}
        placeholder="Search by title, author, or ISBN"
      />
    </div>
  );
};

SearchBookBar.prototype = {
  onSearchBooks: PropTypes.func.isRequired
};

export default SearchBookBar;
