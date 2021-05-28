import React,{useRef,useEffect} from 'react';
import '../../../node_modules/antd/dist/antd.css';
import './play.css';

 const Play= (props) => {
        const myref=useRef()
      
        useEffect(()=>{
              myref.current.play()
        },[props.src])

       
  return (
    <>
      <video ref={myref}  src={props.src}
       autoPlay={true} muted className='play' >
      </video>
    </>
    )
  }

  export default Play;