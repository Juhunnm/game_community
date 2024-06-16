import React, { useState, useEffect } from 'react';
import './css/MarketBoard.css';
import Chart from "./Chart";
import TransactionForm from "./TransactionForm";
import Modal from 'react-modal';
import { db } from '../firebase'; // Firestore 초기화 파일 임포트
import { collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useAuth } from "./contexts/AuthContext";
import Chat from './Chat'; // 새로운 Chat 컴포넌트 추가
import ChatList from './ChatList'; // 새로운 ChatList 컴포넌트 추가

const gameItems = {
    "메이플스토리": [
        { id: 1, name: '노가다 목장갑', image: '/game_item/목잡갑.png' },
        { id: 2, name: '이카루스의 망토', image: '/game_item/망토.png' },
        { id: 3, name: '황갑충', image: '/game_item/황갑충.png' },
        { id: 4, name: '장갑 공격력 주문서', image: '/game_item/장갑주문서.png' },
        { id: 5, name: '피닉스 완드', image: '/game_item/피닉스 완드.png' },
    ],
    "리니지": [
        { id: 6, name: '단검', image: '/game_item/단검.jpg' },
        { id: 7, name: '라스타바드 블레이드', image: '/game_item/블레이드.jpg' },
        { id: 8, name: '바람칼날의 단검', image: '/game_item/바람칼날.gif' },
        { id: 9, name: '라스타바드 블레이드', image: '/game_item/블레이드.jpg' },
        { id: 10, name: '견고한 아우라키아의 투구', image: '/game_item/아투라키아의 투구.jpg' },
    ],
    "아키에이지": [
        { id: 5, name: 'Archeage Potion', image: 'url_to_archeage_potion_image' },
        { id: 6, name: 'Archeage Boots', image: 'url_to_archeage_boots_image' },
    ],
    "로스트아크": [
        { id: 7, name: 'Lost Ark Ring', image: 'url_to_lost_ark_ring_image' },
        { id: 8, name: 'Lost Ark Necklace', image: 'url_to_lost_ark_necklace_image' },
    ],
    "서든어택": [
        { id: 9, name: 'Sudden Attack Gun', image: 'url_to_sudden_attack_gun_image' },
        { id: 10, name: 'Sudden Attack Grenade', image: 'url_to_sudden_attack_grenade_image' },
    ],
    "오딘": [
        { id: 11, name: 'Odin Helmet', image: 'url_to_odin_helmet_image' },
        { id: 12, name: 'Odin Armor', image: 'url_to_odin_armor_image' },
    ],

};

const MarketBoard = () => {
    const [selectedGame, setSelectedGame] = useState("메이플스토리");
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [transactions, setTransactions] = useState({});
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [chatIsOpen, setChatIsOpen] = useState(false);
    const [chatListIsOpen, setChatListIsOpen] = useState(false);
    const [currentChat, setCurrentChat] = useState(null);
    const { currentUser } = useAuth();

    const items = gameItems[selectedGame];

    useEffect(() => {
        if (selectedItemId) {
            setLoading(true);
            const q = query(collection(db, "transactions"), orderBy("date", "desc"));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const transactionsData = {};
                snapshot.forEach(doc => {
                    const data = doc.data();
                    if (data.itemId === selectedItemId) {
                        if (!transactionsData[data.itemId]) {
                            transactionsData[data.itemId] = [];
                        }
                        transactionsData[data.itemId].push({ ...data, id: doc.id });
                    }
                });
                setTransactions(transactionsData);
                setLoading(false);
            });

            return () => unsubscribe();
        }
    }, [selectedItemId]);

    const handleGameClick = (game) => {
        setSelectedGame(game);
        setSelectedItemId(null);
    };

    const handleItemClick = (id) => {
        setSelectedItemId(id);
    };

    const addTransaction = async (newTransaction) => {
        if (selectedItemId === null) return;

        try {
            const docRef = await addDoc(collection(db, "transactions"), {
                itemId: selectedItemId,
                ...newTransaction
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const deleteTransaction = async (transactionId) => {
        try {
            await deleteDoc(doc(db, "transactions", transactionId));
            setTransactions((prevTransactions) => {
                const updatedTransactions = { ...prevTransactions };
                updatedTransactions[selectedItemId] = updatedTransactions[selectedItemId].filter(tx => tx.id !== transactionId);
                return updatedTransactions;
            });
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    const handleForm = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const handleChat = (transaction) => {
        setCurrentChat(transaction);
        setChatIsOpen(true);
    };

    const handleChatList = () => {
        setChatListIsOpen(!chatListIsOpen);
    };

    return (
        <div className="container">
            <div className="miniHeader">
                {Object.keys(gameItems).map((game) => (
                    <button key={game} onClick={() => handleGameClick(game)}>{game}</button>
                ))}
                {currentUser && currentUser.displayName && (
                    <div>
                    <button onClick={handleChatList}>채팅 목록</button>
                    </div>
                )}
            </div>
            <div className="flexContainer">
                <div className="MainContainer">
                    <h1>아이템 리스트</h1>
                    <ul className="ItemList" style={{ listStyle: "none" }}>
                        {items.map(item => (
                            <li key={item.id} onClick={() => handleItemClick(item.id)}>
                                <img src={item.image} alt={item.name} className="item-image" />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedItemId ? (
                    <div className="rightContainer">
                        {loading ? (
                            <div>로딩 중...</div>
                        ) : transactions[selectedItemId] && transactions[selectedItemId].length > 0 ? (
                            <div className="item-list">
                                <h2>{items.find(item => item.id === selectedItemId).name}</h2>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    {transactions[selectedItemId].map((tx, index) => {
                                        const isSale = tx.type === 'sale';
                                        const typeLabel = isSale ? '판매' : '구매';
                                        const buttonColor = isSale ? 'blue' : 'red';
                                        const isOwner = tx.seller === currentUser.displayName;
                                        return (
                                            <li key={index} className="transaction-item">
                                                <p>{tx.price} Gold
                                                    <br/>
                                                    <button
                                                        style={{ backgroundColor: buttonColor }}
                                                        onClick={() => handleChat(tx)}
                                                    >
                                                        {typeLabel}
                                                    </button>
                                                    {isOwner && (
                                                        <button
                                                            style={{ backgroundColor: 'grey', marginLeft: '10px' }}
                                                            onClick={() => deleteTransaction(tx.id)}
                                                        >
                                                            삭제
                                                        </button>
                                                    )}
                                                </p>
                                                <small>판매자: {tx.seller}</small>
                                                <small>{tx.date}</small>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ) : (
                            <div>데이터가 없습니다.</div>
                        )}
                        <button onClick={handleForm}>아이템 등록하기</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            contentLabel="Transaction Form"
                            className="Modal"
                            overlayClassName="Overlay"
                        >
                            <TransactionForm addTransaction={addTransaction} />
                        </Modal>
                    </div>
                ) : (
                    <div className="rightContainer">아이템을 선택하세요.</div>
                )}
            </div>
            {selectedItemId && (
                <div className="bottomContainer">
                    <Chart transactions={transactions[selectedItemId] || []}
                           item={items.find(item => item.id === selectedItemId).name} />
                </div>
            )}
            {chatIsOpen && (
                <Chat transaction={currentChat} onClose={() => setChatIsOpen(false)} />
            )}
            {chatListIsOpen && (
                <ChatList onSelectChat={setCurrentChat} />
            )}
        </div>
    );
};

export default MarketBoard;