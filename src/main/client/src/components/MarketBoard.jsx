import React, { useState, useEffect } from 'react';
import './css/MarketBoard.css';
import Chart from "./Chart";
import TransactionForm from "./TransactionForm";
import Modal from 'react-modal';
import { db } from '../firebase'; // Firestore 초기화 파일 임포트
import { collection, getDocs, addDoc } from 'firebase/firestore';

const items = [
    { id: 1, name: 'Sword of Valor' },
    { id: 2, name: 'Shield of Light' },
    { id: 3, name: 'Potion of Healing' },
    { id: 4, name: 'Helmet of Wisdom' },
    { id: 5, name: 'Boots of Speed' },
];

const MarketBoard = () => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [transactions, setTransactions] = useState({});
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (selectedItemId !== null) {
                setLoading(true);
                try {
                    const transactionCollection = await getDocs(collection(db, "transactions"));
                    const transactionsData = {};
                    transactionCollection.forEach(doc => {
                        const data = doc.data();
                        if (data.itemId === selectedItemId) {
                            if (!transactionsData[data.itemId]) {
                                transactionsData[data.itemId] = [];
                            }
                            transactionsData[data.itemId].push({ ...data, id: doc.id });
                        }
                    });
                    setTransactions(transactionsData);
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
                setLoading(false);
            }
        };
        fetchData();
    }, [selectedItemId]);

    const handleItemClick = (id) => {
        setSelectedItemId(id);
    };

    const addTransaction = async (newTransaction) => {
        if (selectedItemId === null) return;

        try {
            // Firestore에 새 거래 내역 추가
            const docRef = await addDoc(collection(db, "transactions"), {
                itemId: selectedItemId,
                ...newTransaction
            });
            console.log("Document written with ID: ", docRef.id);

            // 로컬 상태 업데이트
            // setTransactions(prev => ({
            //     ...prev,
            //     [selectedItemId]: [...(prev[selectedItemId] || []), newTransaction]
            // }));
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleForm = () => {
        setModalIsOpen(!modalIsOpen);
    };

    return (
        <div className="container">
            <div className="flexContainer">
                <div className="MainContainer">
                    <h1>거래 게시판</h1>
                    <ul className="ItemList" style={{ listStyle: "none" }}>
                        {items.map(item => (
                            <li key={item.id} onClick={() => handleItemClick(item.id)}>
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
                                        return (
                                            <li key={index} className="transaction-item">
                                                <p>{tx.price} Gold
                                                    <button style={{ backgroundColor: buttonColor }}>
                                                        {typeLabel}
                                                    </button>
                                                </p>
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
        {/*    채팅*/}
            <div className="chat">채팅</div>
        </div>
    );
};

export default MarketBoard;
