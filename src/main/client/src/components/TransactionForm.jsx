import React, { useState } from 'react';
import './css/TransactionForm.css';
import { useAuth } from "./contexts/AuthContext";

const TransactionForm = ({ addTransaction }) => {
    const [type, setType] = useState('sale');
    const [price, setPrice] = useState('');
    const { currentUser } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!price) {
            alert("가격을 입력해주세요.");
            return;
        }
        const currentDate = getCurrentTime();
        addTransaction({
            type,
            price: parseInt(price, 10),
            date: currentDate,
            seller: currentUser.displayName
        });
        setType('sale');
        setPrice('');
    };

    const getCurrentTime = () => {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <div>
                <label>거래 유형:</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="sale">판매</option>
                    <option value="purchase">구매</option>
                </select>
            </div>
            <div>
                <label>가격 (Gold):</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button type="submit">거래 등록</button>
        </form>
    );
};

export default TransactionForm;
