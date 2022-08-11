import { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import styles from '../styles/Home.module.css';
import LineChart from './LineChart';
import chartStyles from '../styles/Chart.module.css';
import { motion } from 'framer-motion';
import History from './history';

function Graph({ player }) {
    const [showGraph, setShowGraph] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [chartData, setChartData] = useState({
        labels: player.rating2v2.map((data) => new Date(data.date).toLocaleDateString('en-GB')),
        datasets: [
            {
                label: 'Rating 2v2',
                data: player.rating2v2.map((data) => data.rating),
                borderColor: '#003f5c',
                borderWidth: 1,
            },
            {
                label: 'Rating 3v3',
                data: player.rating3v3.map((data) => data.rating),
                borderColor: '#58508d',
                borderWidth: 1,
            },
            {
                label: 'Rating RBG',
                data: player.ratingrbg.map((data) => data.rating),
                borderColor: '#bc5090',
                borderWidth: 1,
            },
        ],
    });

    const hideShowAnimation = {
        key: 'animate_box',
        initial: { y: -10, opacity: 0, scale: 1 },
        animate: { y: 0, opacity: 1, scale: 1 },
        transition: { duration: 0.2, ease: 'easeOut' },
    };

    let [secondLast, last] = player.rating2v2.slice(-2);

    //  console.log(player.player, 'secondLast', typeof secondLast.rating)
    //  console.log(player.player, 'last', typeof last.rating)

    // console.log('player:', player.player, 'last rating:', secondLast.rating, 'current rating:', last.rating, 'gain/loss', last.rating - secondLast.rating);

    // This const controlls the maximum of rows mapped in history

    return (
        <>
            <button className={styles.graph__button} onClick={() => setShowGraph((prev) => !prev)}>
                {!showGraph ? <MdExpandMore /> : <MdExpandLess />}
            </button>
            {showGraph && (
                <motion.div {...hideShowAnimation} className={styles.graph}>
                    <div className={chartStyles.chartBox}>
                        <LineChart chartData={chartData} />
                    </div>
                    <button className={styles.graph__button} onClick={() => setShowHistory((prev) => !prev)}>
                        {!showHistory ? <MdExpandMore /> : <MdExpandLess />}
                    </button>
                    {showHistory && <History player={player} />}
                </motion.div>
            )}
        </>
    );
}

export default Graph;
