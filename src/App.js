import React from 'react';

import BookContextsProvider from './contexts/BookContexts';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextsProvider>
        <Navbar />
      </BookContextsProvider>
    </div>
  );
}

export default App;
