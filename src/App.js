import React from 'react';

import BookContextsProvider from './contexts/BookContexts';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookContextsProvider>
        <Navbar />
        <BookList/>
      </BookContextsProvider>
    </div>
  );
}

export default App;
