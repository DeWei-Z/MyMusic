
import '../../../font/iconfont.css'
import './comment.css'

const Comment=(props)=>{

    return(
        <>
        <div className='comment' onClick={props.changeOpen}>
        <span className="iconfont talk">&#xe663;</span>
        <div className="countComment" >1</div>
        </div>
       
        </>
    )
}

export default Comment;