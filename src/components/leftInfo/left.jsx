import './left.css';


const Left=(props)=>{
    
    return (
        <div className="left">
            <div className="flex-content">
            <a href='www.baidu.com' className='master'>@{props.video.master}</a>
            <p className='text'>今天天气真不错今</p>
            </div>
        </div>
    )
}


export default Left;