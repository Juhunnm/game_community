import React, { useState } from 'react';
import axios from 'axios';

const SuggestBoard = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [author, setAuthor] = useState('juhun');

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1)
      .padStart(2, '0')}-${String(now.getDate())
      .padStart(2, '0')} ${String(now.getHours())
      .padStart(2, '0')}:${String(now.getMinutes())
      .padStart(2, '0')}:${String(now.getSeconds())
      .padStart(2, '0')}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title.trim() || !detail.trim() || !author.trim()) return;

    const newSuggestion = {
      title,
      detail,
      author,
      time: getCurrentTime()
    };

    try {
      const response = await axios.post('http://localhost:8080/post', newSuggestion);
      setSuggestions([...suggestions, response.data]);
      setTitle('');
      setDetail('');
      setAuthor('');
    } catch (error) {
      console.error('Error posting suggestion:', error);
    }
  };

  return (
    <div>
      <h1>건의 게시판</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <input
          type="text"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder="세부내용"
        />
        <button type="submit">제출</button>
      </form>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <h3>{suggestion.title}</h3>
            <p>{suggestion.detail}</p>
            <small>작성시간: {suggestion.time}</small>
            <br />
            <small>작성자: {suggestion.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestBoard;
