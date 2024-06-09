import React, { useState } from 'react';
import './css/PostFrom.css'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useAuth} from '../components/contexts/AuthContext';
const GameBoardForm = () => {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [author, setAuthor] = useState('');
    const {currentUser} = useAuth();

    const navigate = useNavigate()
    const getCurrentTime = () => {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            "gameType":"메이플",
            "textHeader":"공지",
            "textTitle":"제목 테스트",
            "content":"내용 테스트",
            "timetowrite" : getCurrentTime(),
            "userName" : currentUser.displayName || "익명",
        };

        axios
            .post('http://localhost:8080/gameBoard/insertBoard', formData)
            .then((res) => {
                console.log(res.data);
                navigate(-1);
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    };
    return (
        <div className="PostFormContainer">
            <h2>글 작성</h2>
            <button className="close-btn" onClick={()=>{
                navigate(-1);
            }}>x</button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>게시판</label>
                    <select>
                        <option>게시판 선택</option>
                    </select>
                    <select>
                        <option>말머리 선택</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>제목</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="글 제목"
                    />
                </div>
                <div className="form-group">
                    <label>파일 첨부</label>
                    <button type="button">사진</button>
                    <button type="button">동영상</button>
                    <button type="button">링크</button>
                </div>
                <div className="form-group">
                    <label>글쓰기</label>
                    <textarea
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        placeholder="내용을 입력하세요"
                    ></textarea>
                </div>
                <button type="submit">작성 완료</button>
            </form>
        </div>
    );
};

export default GameBoardForm;