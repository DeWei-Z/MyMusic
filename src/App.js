import React,{useState} from 'react';
import './App.css';
import Play from './components/play/play';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Right from './components/rightInfo/right';
import Left from './components/leftInfo/left'

const App = () => {
         let [src,setSrc]=useState('/video?num=1')
         const changeSrc=(newSrc)=>{
              setSrc(newSrc)
         } 

  return (
    <div className='app'>
       <Play src={src}/>
       <Header/>
       <Left/>
       <Right changeSrc={changeSrc}/>
       <Footer/>
       
    </div>
  )
  }
  
 


export default App;