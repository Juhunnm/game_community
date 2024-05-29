import React, { useState } from 'react';
import { auth } from '../../firebase'; // Ensure this path is correct
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// css
import './AuthForm.css';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!name || !email || !password) {
      alert("이름, 이메일, 비밀번호를 모두 입력해주세요.");
      setIsLoading(false);
      return;
    }
    try {
      const userInfo = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userInfo.user, { displayName: name });
      console.log('User created with name:', userInfo.user.displayName);
      // Redirect the user or clear the form here after successful signup
    } catch (error) {
      console.error('Error signing up:', error.message);
      if (error.code === "auth/weak-password") {
        setErrorText("비밀번호는 6자리 이상 입력해주세요.");
      } else {
        setErrorText(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="auth-form-container">
        <h2 className="auth-form-header">Signup</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
          />
          <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
          />
          <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
          />
          {errorText && <p className="error-text">{errorText}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Signup'}
          </button>
        </form>
      </div>
  );
}

export default Signup;
