import React, {useState} from 'react';
import {auth} from '../../firbase';
import {signInWithEmailAndPassword,setPersistence,browserLocalPersistence} from "firebase/auth";
// css
import './AuthForm.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        // 로그인 유지 설정
        await setPersistence(auth, browserLocalPersistence);

        if (!email || !password) {
            alert("이메일과 비밀번호를 입력해주세요.");
            setIsLoading(false);
            return;
        }
        try {
            const userInfo = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in:', userInfo);
            // Redirect the user or handle the session state as needed
        } catch (error) {
            console.error('Error logging in:', error.message);
            setErrorText(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-form-container">
            <h2 className="auth-form-header">Login</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
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
                {errorText && <p style={{color: 'red'}}>{errorText}</p>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Login'}
                </button>
            </form>
        </div>
    );
}

export default Login;
