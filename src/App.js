import React,{useState,useEffect} from 'react';
import './App.css';
import Play from './components/play/play';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Right from './components/rightInfo/right';
import Left from './components/leftInfo/left';
import {videoDesc} from './ajax/index'
import memory from './memory';

const App = () => {
         let [src,setSrc]=useState('/upload/admin1.mp4')
         let [video,setVideo]=useState({})
         let [count,setCount]=useState(1)
         let [like,setLike]=useState(false)

         const asyncResult=async()=>{
                  const result=await videoDesc(count)
                  setVideo(result)
                     
      }
         useEffect(()=>{
               asyncResult()
               if(memory.user.username){
                 if( memory.user.likeSrc.includes(src)){
                   setLike(true)
                 }else{
                   setLike(false)
                 }
               }
                 // eslint-disable-next-line react-hooks/exhaustive-deps
        },[src])

         const changeSrc=(newSrc)=>{
              setSrc(newSrc)
         }

         const changeCount=(count)=>{
              setCount(count)
         }

         const changeLike=()=>{
         
              setLike(old=>!old)
         }

  return (
    <div className='app'>
       <Play src={src}/>
       <Header/>
       <Left src={src} video={video}   />
       <Right changeSrc={changeSrc} changeCount={changeCount} changeLike={changeLike} 
       like={like} src={src}  tag={video.tag} />
       <Footer/>
       
    </div>
  )
  }
  
 


export default App;