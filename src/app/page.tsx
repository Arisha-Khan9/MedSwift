"use client";
import React from 'react';
import Header from './components/header';
import Search from './search/page';
import Start from './components/start';
import Hero from './components/hero';
import Footer from './components/footerpage';


const Home: React.FC = () => {
  return (
    <div>
   <Header/>
   <Search/>
   <Start/>
   <Hero/>
   <Footer/>
  
    </div>
  );
};

export default Home;
