import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f3f3f3'
  };

  const navStyle = {
    listStyle: 'none',
    display: 'flex'
  };

  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={{...linkStyle, fontWeight: 'bold'}}>LOGO</Link>
      <ul style={navStyle}>
        <li><Link to="/gameboard" style={linkStyle}>게임 게시판</Link></li>
        <li><Link to="/popularboard" style={linkStyle}>인기글 게시판</Link></li>
        <li><Link to="/marketboard" style={linkStyle}>시세 게시판</Link></li>
        <li><Link to="/suggestboard" style={linkStyle}>건의 게시판</Link></li>
      </ul>
      <div>
        <Link to="/signup" style={linkStyle}>회원가입</Link>
        <Link to="/login" style={linkStyle}>로그인</Link>
      </div>
    </header>
  );
}

export default Header;
