import React,{useRef,useEffect} from 'react';
import '../../../node_modules/antd/dist/antd.css';
import './play.css';

 const Play= () => {
        const myref=useRef()
        useEffect(()=>{
        
        myref.current.play()
        })
  return (
    <>
      <video ref={myref}  src={require('./meinv.mp4').default} 
      controls autoPlay={true} muted className='play'>
      </video>
     
    </>
    )
  }

  export default Play;