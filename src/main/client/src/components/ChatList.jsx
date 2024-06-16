import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { useAuth } from "./contexts/AuthContext";
import './css/ChatList.css';

const ChatList = ({ onSelectChat }) => {
    const [chats, setChats] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        if (!currentUser) return;

        // 먼저 자신이 올린 transactions를 가져옵니다.
        const transactionQuery = query(collection(db, 'transactions'), where('seller', '==', currentUser.displayName));
        const unsubscribe = onSnapshot(transactionQuery, (transactionSnapshot) => {
            const transactionIds = transactionSnapshot.docs.map(doc => doc.id);

            if (transactionIds.length > 0) {
                // 자신이 올린 거래와 관련된 채팅을 가져옵니다.
                const chatQuery = query(collection(db, 'chats'), where('transactionId', 'in', transactionIds), orderBy('timestamp', 'desc'));
                const chatUnsubscribe = onSnapshot(chatQuery, (chatSnapshot) => {
                    const chatsData = chatSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                    setChats(chatsData.filter(chat => chat.sender !== currentUser.displayName));
                });

                return () => chatUnsubscribe();
            } else {
                setChats([]);
            }
        });

        return () => unsubscribe();
    }, [currentUser]);

    return (
        <div className="chat-list-container">
            <h2>채팅 목록</h2>
            {chats.length > 0 ? (
                <ul>
                    {chats.map(chat => (
                        <li key={chat.id} onClick={() => onSelectChat(chat)}>
                            {/*<p><strong>거래 ID:</strong> {chat.transactionId}</p>*/}
                            <p><strong>메시지:</strong> {chat.message}</p>
                            <small>{new Date(chat.timestamp.seconds * 1000).toLocaleString()}</small>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>현재 채팅이 없습니다.</p>
            )}
        </div>
    );
};

export default ChatList;
