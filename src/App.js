import React from 'react';
import Destinasi from './components/destinasi/destinasi';
import Navbar from './components/Nav/nav';
import Detail from './components/destinasi/detail/detail';

const App = () => {
  return (
    <>
      <Navbar/>
      <Destinasi/>
      {/* <Detail/> */}
    </>
  )
}

export default App