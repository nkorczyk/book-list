import React, { useContext } from 'react';

import { BookContexts } from '../contexts/BookContexts';

const Navbar = () => {
  const { books } = useContext(BookContexts);

  return <div className="navbar">
    <h1>Ninja Reading List</h1>
    <p>Currently you have {books.length} books to get through...</p>
  </div>;
};

export default Navbar;
