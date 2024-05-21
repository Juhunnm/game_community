import React, {useState} from 'react';
import './css/MarketBoard.css';

const MarketBoard = () => {
    const [items, setItems] = useState([
        {name: 'Sword of Valor', price: 1200, lastUpdated: '2024-05-20 12:00:00'},
        {name: 'Shield of Light', price: 800, lastUpdated: '2024-05-20 12:05:00'},
        {name: 'Potion of Healing', price: 50, lastUpdated: '2024-05-20 12:10:00'},
        {name: 'Helmet of Wisdom', price: 500, lastUpdated: '2024-05-20 12:15:00'},
        {name: 'Boots of Speed', price: 300, lastUpdated: '2024-05-20 12:20:00'},
    ]);

    return (
        <div>
            <h1 style={{textAlign:'center'}}>시세 게시판</h1>
            <div className="MarketBoardContainer">
                <h1>아이템 시세</h1>
                <ul className="ItemList">
                    {items.map((item, index) => (
                        <li key={index} className="Item">
                            <div className="ItemName">{item.name}</div>
                            <div className="ItemPrice">{item.price} 골드</div>
                            <div className="ItemLastUpdated">마지막 업데이트: {item.lastUpdated}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MarketBoard;
