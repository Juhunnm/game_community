import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// 사용자 로그인 상태
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// userContext
import {useAuth} from './components/contexts/AuthContext'

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

const Header = () => {
  const [isLogin,setIsLogin] = useState(false);
  const [uid,setUid] = useState("");
  const [userName,setUserName] = useState("");
  const auth = getAuth();

  const { currentUser } = useAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        setUserName(user.displayName || "Anonymous");
      } else {
        setIsLogin(false);
        setUserName("");
      }
    });
    return () => unsubscribe();
  }, [auth]);

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
        <li><Link to="/gameboard" style={linkStyle}>게임 게시판</Link></li>
        <li><Link to="/popularboard" style={linkStyle}>인기글 게시판</Link></li>
        <li><Link to="/marketboard" style={linkStyle}>시세 게시판</Link></li>
        <li><Link to="/suggestboard" style={linkStyle}>건의 게시판</Link></li>
      </ul>
      <div>
      {isLogin ? (
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
