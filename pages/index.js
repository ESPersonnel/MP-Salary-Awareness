import React, { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <div className="max-w-2xl w-full p-6 bg-background rounded-lg shadow-lg">
                <div className="space-y-6">
                    <StatCard stat={stat} />
                    <div className='mt-6 flex justify-end'>
                        <Button
                            onClick={downloadImage}
                            className="bg-green-700 text-white hover:bg-green-800 focus:ring-green-500"
                        >
                            Download as Image
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

{/* <div className="flex flex-col items-center justify-center min-h-screen bg-background">
<div className="max-w-2xl w-full p-6 bg-background rounded-lg shadow-lg">
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-primary">1 MP's salary this month could cater for...</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-card rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-primary-foreground">1000 girls get free pads for a year</h2>
        <p className="text-muted-foreground">
          With the average cost of pads being £5 per month, 1 MP's salary could provide free pads for 1000 girls
          for an entire year.
        </p>
      </div>
    </div>
    <div className="flex justify-end">
      <Button className="flex items-center gap-2">
        <DownloadIcon className="h-5 w-5" />
        Download as Image
      </Button>
    </div>
  </div>
</div>
</div> */}

