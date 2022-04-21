import './App.css';
import React, { useState, useEffect } from 'react';
import TopNav from './components/layout/TopNav';
import Nav from './components/layout/Nav';
import Home from './components/Home';
import About from './components/About';

import Faqs from './components/faq_components/Faqs';

import { Provider } from './context';

import ClipLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";

import { IoCaretUp } from 'react-icons/io5';
import Partners from './components/Partners';
import Ponuda from './components/Ponuda';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const override = css`
    display: block;
    height: 100vh;
    margin: 40vh auto;
`;

  return (
    <Provider className='provider'>
      {
        loading ? (
        <ClipLoader color={'#151E3F'} css={override} loading={loading} size={150} />
        ) : (
          <div className="App">
            <div className='navigation'>
              <TopNav/>
              <Nav />
            </div>
            <div className='page-content'>
              <Home />
              <About />
              <Partners />
              <Ponuda />
              <Faqs />
              <Kontakt />
              <Footer />
            </div>
            <a href='#top'> 
              <div className='fixed-btn'>
                <IoCaretUp className='fixed-button-for-top' />
              </div>
            </a>
          </div>
        )        
      }
    </Provider>
  );
}

export default App;
