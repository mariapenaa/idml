
import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from 'components/Home/Home';
import Header from 'shared/Header/Header'
import Footer from 'shared/Footer/Footer'

function App() {

  return (
      <React.Fragment>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}  />
          </Routes>
        </main>
        <Footer />
      </React.Fragment>
  );
}

export default App;
