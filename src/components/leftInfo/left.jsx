import './left.css';
import React,{useEffect,useState} from 'react';


const Left=(props)=>{

    const [tag,setTag]=useState()
    useEffect(()=>{
        if(props.video.tag){
            const tags=props.video.tag[0].split(',').join(' #');
            setTag(tags)
        }
    },[props.video.tag])
   

    return (
        <div className="left">
            <div className="flex-content">
            <a href='www.baidu.com' className='master'>@{props.video.master}</a>
            <p className='text'>{props.video.desc}&nbsp;#{tag}</p>
            </div>
        </div>
    )
}


export default Left;