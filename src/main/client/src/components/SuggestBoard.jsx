import React, {useEffect, useState} from 'react';

import './css/SuggestBoard.css'
import PostForm from "./PostForm";
// firebase store
import {db} from '../firebase'
import {collection, getDocs} from "firebase/firestore";
// react-spinner
import {BeatLoader} from "react-spinners";

const SuggestBoard = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [isClick, setIsClick] = useState(false);
    const [loading, setLoading] = useState(true);

    // Firestore에서 데이터 불러오기
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, "posts"));
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({id: doc.id, ...doc.data()});
                });
                setSuggestions(items);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);
    const handleClick = () => {
        setIsClick(!isClick);
    }

    return (
        <div>
            <div className='SuggestContainer'>
                <h1>건의 게시판</h1>
                <button className="suggestBoardWriteButton" onClick={handleClick}>작성하기</button>
            </div>
            {isClick ? (
                <PostForm setIsClick={setIsClick}/>
            ) : (
                <div>
                    {loading ? (
                        <div style={{display: 'flex', justifyContent: 'center', padding: '50px'}}>
                            <BeatLoader /> {/* 로더 컬러 변경 가능 */}
                        </div>
                    ) : (
                        <ul style={{listStyle: "none", paddingLeft: '0px'}}>
                            {suggestions.map((suggestion, index) => (
                                <li key={index} className="SuggestBox">
                                    <h2 className='SuggestTitle'>{suggestion.title}</h2>
                                    <p className='SuggestDetail'>{suggestion.detail}</p>
                                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                                        <small>{suggestion.author}</small>
                                        <small>{suggestion.time}</small>
                                    </div>
                                </li>
                            ))}
                        </ul>)
                    }
                </div>
            )}
        </div>
    );
};

export default SuggestBoard;