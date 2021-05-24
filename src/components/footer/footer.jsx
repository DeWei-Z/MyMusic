import './footer.css'
import '../../font/iconfont.css'
import Login from './login/login'

const Footer=()=>{

    return(
        <div className="footer-nav">
            <a href='www.baidu.com'>首页</a>
            <a href='www.baidu.com'>朋友</a>
            <span class="iconfont">&#xe627;</span>
            <a href='www.baidu.com'>消息</a>
           
            <Login/>
        </div>
    )
}

export default Footer