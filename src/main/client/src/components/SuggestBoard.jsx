import React, {useState} from 'react';

import './css/SuggestBoard.css'
import PostForm from "./PostForm";

const SuggestBoard = () => {
    const [suggestions, setSuggestions] = useState([
        {title: "test123", detail: "test123 detail", author: "juhun123", time: '2024-05-20 18:46:07'},
        {title: "test234", detail: "test234 detail", author: "juhun234", time: '2024-05-20 18:46:07'},
        {title: "test345", detail: "test345 detail", author: "juhun345", time: '2024-05-20 18:46:07'},
        {title: "test456", detail: "test456 detail", author: "juhun456", time: '2024-05-20 18:46:07'},
        // Add more initial suggestions if needed
    ]);

    const [isClick, setIsClick] = useState(false);


    const handleClick = () => {
        setIsClick(!isClick);
    }
    const addPost = (newPost) =>{
        // setSuggestions([...setSuggestions,newPost]);
        setSuggestions((prev) => [...prev, newPost]);
    };
    return (
        <div>
            <div className='SuggestContainer'>
                <h1>건의 게시판</h1>
                <button className="suggestBoardWriteButton" onClick={handleClick}>작성하기</button>
            </div>
            {isClick ? (
                <PostForm addPost={addPost} setIsClick={setIsClick}/>
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
                </ul>
            )}
        </div>
    );
};

export default SuggestBoard;
