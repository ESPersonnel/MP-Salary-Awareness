import React from 'react';

const splitText = (text) => {
    const middleIndex = Math.floor(text.length / 2);
    const before = text.lastIndexOf(' ', middleIndex);
    const after = text.indexOf(' ', middleIndex + 1);

    if (middleIndex - before < after - middleIndex) {
        return [text.slice(0, before), text.slice(before + 1)];
    } else {
        return [text.slice(0, after), text.slice(after + 1)];
    }
};

/**
 * 
 * The function above works as follows:
 * 
 */

const StatCard = ({ stat }) => {
    const [firstPart, secondPart] = splitText(stat);

    return (
        <div id="stat-card" className="bg-white shadow-lg p-10 border max-w-screen-md mx-auto my-20 rounded-lg">
            <h1 className="text-3xl font-bold text-red-700 mb-4">
                1 MP's salary this month could cater for
            </h1>
            <p className="text-2xl">
                <span className="text-red-700 font-bold">{firstPart}</span>
                {' '} 
                <span className="text-green-700 font-bold">{secondPart}</span>
            </p>
        </div>
    );
};

export default StatCard;
