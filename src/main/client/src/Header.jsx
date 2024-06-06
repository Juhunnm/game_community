import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// 사용자 로그인 상태
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
  const [isLogin,setIsLogin] = useState(false);
  const [uid,setUid] = useState("");
  const [userName,setUserName] = useState("");
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setIsLogin(true)
        setUserName(user.displayName);
      }else{
        setIsLogin(false);
      }
    });
    return unsubscribe;
  }, [auth]);


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
        {setIsLogin ? (
            <span>{userName}</span>
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
