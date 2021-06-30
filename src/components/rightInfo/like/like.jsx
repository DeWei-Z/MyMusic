import './like.css'
import memory from '../../../memory';
import {message} from 'antd';
import {reqLike,reqUnlike,reqUser} from '../../../ajax/index'

const Like=(props)=>{

    const handleClick=async()=>{         
      if(!memory.user.username){
          message.error('请先登录')
          return;
        }

        if(!props.like){
          reqLike(props.src,memory.user._id,props.tag)
        }else{
          reqUnlike(props.src,memory.user._id,props.tag)
        }
      props.changeLike()

      let response=await reqUser(memory.user.username)
      if (response.status===0) { 
        console.log('user成功')
        memory.user=response.data
        console.log(memory.user)
        localStorage.setItem('user',JSON.stringify(response.data))
        return true;
      }else{
        message.error('user失败')
        return false;
      }
}
    return (
      <>
              
                <div id="heart"  onClick={handleClick}>
                    <div id="div1" style={{borderColor:props.like?'red':'white'}}>
                    </div>
                    <div id="div2" style={{borderColor:props.like?'red':'white'}}>
                    </div>
                    <div id="div3"style={{borderColor:props.like?'red':'white'}} >
                    </div>
                </div>
                <div className="countLike" >1</div>
      </>
    )
}

export default Like;