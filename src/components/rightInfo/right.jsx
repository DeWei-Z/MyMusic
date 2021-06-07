import Change from './changeVideo/change';
import './right.css';
import Like from './like/like'


const Right=(props)=>{
           
    return(
        <div className="right">
            <Like/>
            <Change changeSrc={props.changeSrc} changeCount={props.changeCount} />
        </div>
    )
}

export default Right;