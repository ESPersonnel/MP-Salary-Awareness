export default function handler(req, res) {
    const stats = [
        "1000 girls get free pads for a year",
        "5 cancer patients can get full treatment for free",
        "food for 1000 people every day for a month",
        // Add more stats here
    ];
    const randomStat = stats[Math.floor(Math.random() * stats.length)];
    res.status(200).json({ stat: randomStat });
}
