import React from 'react';
import Header from './components/Header';
import BookFinder from './components/bookFinder/BookFinder.jsx'
import Fotter from './components/Fotter';

const App = () => {
  return (
    <>
    <Header/>
    <div className='my-10 lg:my-14'>
      <BookFinder/>
    </div>
    <Fotter/>
    </>
  );
};

export default App;