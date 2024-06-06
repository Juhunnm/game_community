import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// 사용자 로그인 상태
import { signOut, getAuth } from "firebase/auth";
// userContext
import {useAuth} from './components/contexts/AuthContext'

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  marginTop: '5px'
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  marginRight: '20px',
  backgroundColor: '#f5f4f1',
  padding: '10px 20px',
  borderRadius: '20px'
};

const linkStyle = {
  margin: '0 10px',
  textDecoration: 'none',
  color: 'white',
};


const Header = () => {
  const { currentUser } = useAuth(); // 현재 사용자 접근
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header style={headerStyle}>
      <Link to="/"><img src="gameLogo/MainLogo.png" alt="mainPageLogo" style={{ width: '50px', height: '40px' }}/></Link>
      <ul style={navStyle}>
        <li className="headerelement"><Link to="/gameboard" style={linkStyle}>게임 게시판</Link></li>
        <li className="headerelement"><Link to="/popularboard" style={linkStyle}>인기글 게시판</Link></li>
        <li className="headerelement"><Link to="/marketboard" style={linkStyle}>시세 게시판</Link></li>
        <li className="headerelement"><Link to="/suggestboard" style={linkStyle}>건의 게시판</Link></li>
      </ul>
      <div>
        {currentUser ? (
            <>
              <span style={linkStyle}>{currentUser.displayName}</span>
              <Link to="/" onClick={handleLogout} style={linkStyle}>로그아웃</Link>
            </>
        ) : (
            <>
              <Link to="/signup" style={linkStyle}>회원가입</Link>
              <Link to="/login" style={linkStyle}>로그인</Link>
            </>
        )}
      </div>
    </header>
  );
}

export default Header;
