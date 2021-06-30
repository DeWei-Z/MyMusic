import './talk.css'


const Talk=(props)=>{

    return (
        <>
      
        <div className={props.openTalk?'containerA':'container'}>
            <button onClick={props.changeOpen} style={{marginLeft:355}} >X</button>
        </div>
    
        </>

    )
}

export default Talk;