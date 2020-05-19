import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';
import MainContainer from './layouts/MainContainer';
import { ToastContainer } from 'react-toastify';

const App = () => {


  return (
    <BrowserRouter>

      <ScrollToTop>
        <MainContainer />
        <ToastContainer />
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App;