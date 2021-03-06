import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Header.scss';

function Header({color}){
    return(
        <header id="header" className={color}>
        <div className="port"><Link to="/port">port</Link></div>
        <div className="logo"><Link to="/">YOON</Link></div>
        <nav className="nav">
            <ul>
                <li><Link to="signup.html">회원가입</Link></li>
                <li><Link to="login.html">로그인</Link></li>
                <li><Link to="board.html">게시판</Link></li>
            </ul>
            <ul>
            <li><Link to="/about">About</Link></li>
                <li><Link to="/script">Script</Link></li>
                <li><Link to="/Reference">Reference</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header;