import React, { createContext, useReducer } from 'react';

import { bookReducer } from '../reducers/bookReducer';

export const BookContexts = createContext();

const BookContextsProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContexts.Provider value={{ books, dispatch }}>{props.children}</BookContexts.Provider>
  );
};

export default BookContextsProvider;
