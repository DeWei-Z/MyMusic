import './header.css'
import '../../font/iconfont.css'


const Header=()=>{
    return(
    <div className="header-nav">
        <a className='live' href="www.baidu.com">直播</a>
        <div className="header-mid">
            <a href="www.baidu.com">同城</a>
            <a href="www.baidu.com">关注</a>
            <a href="www.baidu.com">推荐</a>
        </div>
        <a className='search iconfont' href="www.baidu.com">&#xe731;</a>
    </div>
    )
}

export default Header;