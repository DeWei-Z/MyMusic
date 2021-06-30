import React,{useState,useEffect} from 'react';
import './App.css';
import Play from './components/play/play';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Right from './components/rightInfo/right';
import Left from './components/leftInfo/left';
import {videoDesc} from './ajax/index'
import memory from './memory';
import Talk from './components/footer/talk/talk';

const App = () => {
         let [src,setSrc]=useState('/upload/admin1.mp4')
         let [video,setVideo]=useState({})
         let [count,setCount]=useState(1)
         let [like,setLike]=useState(false)
         let [openTalk,setOpenTalk]=useState(false)

         const asyncResult=async()=>{
                  const result=await videoDesc(count)
                  setVideo(result)        
      }

        const userLike=()=>{
          if(memory.user.username){
            if( memory.user.likeSrc.includes(src)){
              setLike(true)
            }else{
              setLike(false)
            }
          }
        }
         useEffect(()=>{
               asyncResult()
               userLike()
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

         const changeOpen=()=>{
              setOpenTalk(old=>!old)
         }

  return (
    <div className='app'>
       <Play src={src}/>
       <Header/>
       <Left src={src} video={video}   />
       <Right changeSrc={changeSrc} changeCount={changeCount} changeLike={changeLike} 
       like={like} src={src}  tag={video.tag}  changeOpen={changeOpen} />
       <Footer userLike={userLike} />
       <Talk openTalk={openTalk} changeOpen={changeOpen} />
    </div>
  )
  }
  
 


export default App;