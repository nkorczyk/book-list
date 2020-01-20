import React, { createContext, useReducer, useEffect } from 'react';

import { bookReducer } from '../reducers/bookReducer';

export const BookContexts = createContext();

const BookContextsProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContexts.Provider value={{ books, dispatch }}>{props.children}</BookContexts.Provider>
  );
};

export default BookContextsProvider;
