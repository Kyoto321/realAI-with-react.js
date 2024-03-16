import React from 'react';
import './App.css'

//import Article from './components/article/Article'
//import Brand from './components/brand/Brand';
//import CTA from './components/cta/CTA';
//import Feature from './components/feature/Feature';
//import Navbar from './components/navbar/Navbar';

import { Footer, Blog, Possibility, Features, RealAI, Header} from './containers';
import { CTA, Brand, Navbar } from './components';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <RealAI/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
