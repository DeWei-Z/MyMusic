import './header.css'


const Header=()=>{
    return(
    <div className="header-nav">
        <button className='live'>直播</button>
        <div className="header-mid">
            <a href="www.baidu.com">同城</a>
            <a href="www.baidu.com">关注</a>
            <a href="www.baidu.com">推荐</a>
        </div>
        <button className='search'>搜索</button>
    </div>
    )
}

export default Header;