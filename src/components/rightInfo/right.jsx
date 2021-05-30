import Change from './changeVideo/change';
import './right.css'


const Right=(props)=>{
           
    return(
        <div className="right">
            <Change changeSrc={props.changeSrc} changeCount={props.changeCount} />
        </div>
    )
}

export default Right;