import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TransactionChart = ({ transactions, item }) => {
    return (
        <div>
            <h2>{item} 거래 내역</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
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
            </ResponsiveContainer>
        </div>
    );
};

export default TransactionChart;
