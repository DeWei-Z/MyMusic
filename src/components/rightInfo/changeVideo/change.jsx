import React,{useState,useEffect} from 'react';
import '../../../font/iconfont.css'
import './change.css'

const Change=(props)=>{
   
    let [count,setCount]=useState(1)

    useEffect(()=>{
          props.changeSrc(`/upload/admin${count}.mp4`)
          props.changeCount(count)
        },[count,props])

    const next=()=>{
        setCount(()=>{
          if(count===5){
            count=1
          }else{
            count++
          }      
          return count
        })     
}

const previous=()=>{
        setCount(()=>{
          if(count===1)return count;
          count--
          return count
        })
}
    return(
        <>
        <span className='iconfont arrow' onClick={next}>&#xe804;</span>
        <span className='iconfont arrow' onClick={previous}>&#xe7b5;</span>
        </>
    )
}

export default Change;