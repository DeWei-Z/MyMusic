import Change from './changeVideo/change';
import './right.css';
import Like from './like/like'


const Right=(props)=>{
           
    return(
        <div className="right">
            <Like changeLike={props.changeLike} like={props.like} src={props.src} tag={props.tag} />
            <Change changeSrc={props.changeSrc} changeCount={props.changeCount}  />
        </div>
    )
}

export default Right;