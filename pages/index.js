import React, { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import html2canvas from 'html2canvas';

export default function Home() {
    const [stat, setStat] = useState('');

    useEffect(() => {
        fetch('/api/generate-stats')
            .then((response) => response.json())
            .then((data) => setStat(data.stat));
    }, []);

    const downloadImage = () => {
        const element = document.getElementById('stat-card');
        html2canvas(element).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'mp-salary-stat.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <StatCard stat={stat} />
            <button
                onClick={downloadImage}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Download as Image
            </button>
        </div>
    );
}
