import React, { useState } from 'react';
import './css/PostFrom.css'

const WriteForm = ({ addPost,setIsClick}) => {

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [author, setAuthor] = useState('juhun');
    const [board, setBoard] = useState('');
    const [textHeader, setTextHeader] = useState('공지'); // 말머리 설정

    const getCurrentTime = () => {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title.trim() || !detail.trim() || !author.trim()) {
            alert("작성안한 곳이 있습니다")
            return;
        }

        const newPost = {
            id: Date.now(), // 고유 ID 생성
            textHeader,
            textTitle: title,
            userName: author,
            timeToWrite: getCurrentTime(),
            textViewNumber: 0,
            textLikesNumber: 0,
            contents: detail
        };

        addPost(newPost);
        setTitle("");
        setDetail("");
        setAuthor("juhun");
        setIsClick(false);
    };

    return (
        <div className="PostFormContainer">
            <h2>글 작성</h2>
            <button className="close-btn" onClick={() => setIsClick(false)}>x</button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>게시판</label>
                    <select value={board} onChange={(e) => setBoard(e.target.value)}>
                        <option value="">게시판 선택</option>
                        {/* Add options dynamically if needed */}
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
