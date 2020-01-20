import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContexts = createContext();

const BookContextsProvider = props => {
  const [books, setBooks] = useState([
    {
      title: 'the name of the wind',
      author: 'Patrick',
      id: 1,
    },
    {
      title: 'the way of kings',
      author: 'Brandon',
      id: 2,
    },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContexts.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContexts.Provider>
  );
};

export default BookContextsProvider;
