import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./ListBooks/ListBooks";
import SearchBookContainer from "./SearchBook/SearchBookContainer";
import * as BookAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BookAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const searchBooks = async (query) => {
    let res = await BookAPI.search(query);
    if (res.hasOwnProperty("error")) {
      setFilteredBooks([]);
      return;
    }
    if (books.length > 0) {
      res = res.map((book) => {
        const bookInShelf = books.find((book) => book.id);
        if (bookInShelf) {
          return { ...book, shelf: bookInShelf.shelf };
        }
        return book;
      });
    }
    setFilteredBooks(res);
  };

  const updateBook = async (book, shelf) => {
    const res = await BookAPI.update(book, shelf);
    if (res) {
      const found = books.some((item) => item.id === book.id);
      if (found) {
        const booksNew = books.map((item) => item.id === book.id ? {...item, shelf} : item);
        setBooks(booksNew);
      } else {
        setBooks([...books, {...book, shelf}]);
      }
    }
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks books={books} onUpdateBook={updateBook}></ListBooks>
          }
        ></Route>
        <Route
          exact
          path="/search"
          element={
            <SearchBookContainer
              onSearchBooks={searchBooks}
              onUpdateBook={updateBook}
              books={filteredBooks}
            ></SearchBookContainer>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
