import React, {useEffect, useState} from 'react';
import './css/PostFrom.css'

// firebase store
import {db} from '../firebase'
import { collection, addDoc } from 'firebase/firestore';
// useContext
import {useAuth} from './contexts/AuthContext';

const PostForm = ({ addPost,setIsClick}) => {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const {currentUser} = useAuth();

    const getCurrentTime = () => {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title.trim() || !detail.trim()) {
            alert("작성안한 곳이 있습니다")
            return;
        }

        const newPost = {
            title,
            detail,
            author : currentUser.displayName,
            time: getCurrentTime()
        };
        try{
            const docRef = await addDoc(collection(db,"posts"),newPost);
            console.log("Document written with ID: ", docRef.id);
        }catch(e){
            console.error("Error adding document : ",e);
        }
        setTitle("");
        setDetail("");
        setIsClick(false); // 폼 제출 후 게시판으로 돌아가기
    }
    return (
        <div className="PostFormContainer">
            <h2>글 작성</h2>
            <button className="close-btn" onClick={()=>{setIsClick(false)}}>x</button>
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

export default PostForm;