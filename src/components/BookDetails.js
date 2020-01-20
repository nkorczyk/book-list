import React, { useContext } from 'react';

import { BookContexts } from '../contexts/BookContexts';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContexts);

  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
