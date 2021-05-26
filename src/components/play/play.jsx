import React,{useRef,useEffect} from 'react';
import '../../../node_modules/antd/dist/antd.css';
import './play.css';

 const Play= () => {
        const myref=useRef()

        useEffect(()=>{
              myref.current.play()
        })

        const next=()=>{
          myref.current.src='/video?user=zdw'
       
          console.log('haha')
        }
  return (
    <>
      <video ref={myref}  src='/video'
       autoPlay={true} muted className='play' >
      </video>
      <button onClick={next}  >换曲</button>
    </>
    )
  }

  export default Play;