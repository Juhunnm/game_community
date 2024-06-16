import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, where, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useAuth } from "./contexts/AuthContext";
import './css/Chat.css';

const Chat = ({ transaction, onClose }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const { currentUser } = useAuth();

    useEffect(() => {
        const q = query(collection(db, 'chats'), where('transactionId', '==', transaction.id));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messagesData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setMessages(messagesData);
        });
        return unsubscribe;
    }, [transaction.id]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage) return;

        await addDoc(collection(db, 'chats'), {
            transactionId: transaction.id,
            message: newMessage,
            sender: currentUser.displayName,
            seller: transaction.seller,
            timestamp: serverTimestamp()
        });
        setNewMessage('');
    };

    return (
        <div className="chat-container">
            <button onClick={onClose}>닫기</button>
            <div className="messages">
                {messages.map(msg => (
                    <div key={msg.id} className={`message ${msg.sender === currentUser.displayName ? 'sent' : 'received'}`}>
                        <p><strong>{msg.sender}:</strong> {msg.message}</p>
                        <small>{new Date(msg.timestamp?.seconds * 1000).toLocaleString()}</small>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="message-form">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                />
                <button type="submit">전송</button>
            </form>
        </div>
    );
};

export default Chat;
