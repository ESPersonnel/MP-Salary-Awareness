import React from 'react';

const StatCard = ({ stat }) => {

    return (
        <div id="stat-card" className="border p-4 text-center">
            <h1 className="text-2xl font-bold">
                1 MP's salary this month could cater for
            </h1>
            <p className="text-xl text-red-500">{stat}</p>
        </div>
    );
};

export default StatCard;
