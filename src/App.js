import React,{useState,useEffect} from 'react';
import './App.css';
import Play from './components/play/play';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Right from './components/rightInfo/right';
import Left from './components/leftInfo/left';
import {videoDesc} from './ajax/index'

const App = () => {
         let [src,setSrc]=useState('/upload/admin1.mp4')
         let [video,setVideo]=useState({})
         let [count,setCount]=useState(1)

         const asyncResult=async()=>{
                  const result=await videoDesc(count)
                  setVideo(result)
                  console.log(result)       
      }
         useEffect(()=>{
               asyncResult()
                 // eslint-disable-next-line react-hooks/exhaustive-deps
        },[src])
         const changeSrc=(newSrc)=>{
              setSrc(newSrc)
         }

         const changeCount=(count)=>{
              setCount(count)
         }


  return (
    <div className='app'>
       <Play src={src}/>
       <Header/>
       <Left src={src} video={video}   />
       <Right changeSrc={changeSrc} changeCount={changeCount} />
       <Footer/>
       
    </div>
  )
  }
  
 


export default App;