import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const TransactionChart = ({ transactions, item }) => {
    return (
        <div>
            <h2>{item} 거래 내역</h2>
            <LineChart
                width={800}
                height={300}
                data={transactions}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default TransactionChart;
