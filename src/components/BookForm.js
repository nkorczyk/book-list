import React, { useContext, useState } from 'react';

import { BookContexts } from '../contexts/BookContexts';

const BookForm = () => {
  const { dispatch } = useContext(BookContexts);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author,
      },
    });

    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default BookForm;
