import './footer.css'
import Upload from '../upload/upload'
import Login from './login/login'

const Footer=()=>{

    return(
        <div className="footer-nav">
            <a href='www.baidu.com'>首页</a>
            <a href='www.baidu.com'>朋友</a>
            <Upload/>
            <a href='www.baidu.com'>消息</a>
           
            <Login/>
        </div>
    )
}

export default Footer