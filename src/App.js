import React from 'react';
import './App.css';
import Play from './components/play/play';
import Header from './components/header/header';
import Footer from './components/footer/footer'

const App = () => {
 
  return (
    <div className='app'>
       <Play/>
       <Header/>
       <Footer/>
       
    </div>
  )
  }
  
 


export default App;