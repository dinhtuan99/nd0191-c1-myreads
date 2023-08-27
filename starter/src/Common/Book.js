import PropTypes from "prop-types";

const Book = ({ book, onUpdateBook }) => {
  const changeCurrentShelf = (shelf) => {
    onUpdateBook(book, shelf);
  };

  const shelves = [
    {
      id: "1",
      shelfName: "currentlyReading",
      shelfDisplayName: "Currently Reading",
    },
    {
      id: "2",
      shelfName: "wantToRead",
      shelfDisplayName: "Want to Read",
    },
    {
      id: "3",
      shelfName: "read",
      shelfDisplayName: "Read",
    },
    {
      id: "4",
      shelfName: "none",
      shelfDisplayName: "None",
    },
  ];

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: book.imageLinks
                ? `url(${book.imageLinks.thumbnail})`
                : "",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => changeCurrentShelf(event.target.value)}
              defaultValue={book.shelf ? book.shelf : "none"}
            >
              <option value="none" disabled>
                Move to...
              </option>
              {shelves.map((shelve) => {
                if (book.shelf === "none" && shelve.shelfName === "none") {
                  return "";
                }
                return (
                  <option key={shelve.id} value={shelve.shelfName}>
                    {shelve.shelfDisplayName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.toString() : ""}
        </div>
      </div>
    </li>
  );
};

Book.prototype = {
  book: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Book;
