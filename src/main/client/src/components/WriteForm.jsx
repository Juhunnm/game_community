import React, { useState } from 'react';
import './css/PostFrom.css';
import { useAuth } from './contexts/AuthContext';
import axios from 'axios';

const WriteForm = ({ addPost, setIsClick }) => {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [board, setBoard] = useState('');
    const [textHeader, setTextHeader] = useState('공지'); // 말머리 설정
    const { currentUser } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title.trim() || !detail.trim()                                                                                                                                                                                                                                               ) {
            alert("작성안한 곳이 있습니다");
            return;
        }

        const newPost = {
            textHeader,
            textTitle: title,
            userName: currentUser.displayName || "익명",
            content: detail,
            gameType: board
        };

        try {
            // 서버로 새 게시글 전송
            await axios.post('/api/gameBoard', newPost);

            // 로컬 상태 업데이트
                 setTitle("");
            setDetail("");
            setBoard("");
            setIsClick(false);
        } catch (error) {
            console.error("Error posting data:", error);
            alert("게시글 전송에 실패했습니다.");
        }
    };

    return (
        <div className="PostFormContainer">
            <h2>글 작성</h2>
            <button className="close-btn" onClick={() => setIsClick(false)}>x</button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>게시판</label>
                    <select value={board} onChange={(e) => setBoard(e.target.value)}>
                        <option value="">게임 선택</option>
                        <option value="메이플스토리">메이플스토리</option>
                        <option value="리니지">리니지</option>
                        <option value="아키에이지">아키에이지</option>
                        <option value="로스트아크">로스트아크</option>
                        <option value="서든어택">서든어택</option>
                        {/* Add other game types as needed */}
                    </select>
                    <select value={textHeader} onChange={(e) => setTextHeader(e.target.value)}>
                        <option value="공지">공지</option>
                        <option value="정보">정보</option>
                        <option value="잡담">잡담</option>
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

export default WriteForm;
