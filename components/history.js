import React from 'react';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

function History({ player }) {
    const hideShowAnimation = {
        key: 'animate_box',
        initial: { y: -10, opacity: 0, scale: 1 },
        animate: { y: 0, opacity: 1, scale: 1 },
        transition: { duration: 0.2, ease: 'easeOut' },
        exit: { y: -10, opacity: 0, transition: 0.1 },
    };

    const maxRows = 5;
    return (
        <>
                <motion.div {...hideShowAnimation}>
                    <div className={styles.graph__history__container}>
                        <h1>2v2</h1> <hr />
                        {player.rating2v2
                            .slice(Math.max(player.rating2v2.length - maxRows, 0))
                            .reverse()
                            .map((r2v2, index) => (
                                <div className={styles.graph__history} key={index}>
                                    <div>Date: {new Date(r2v2.date).toLocaleDateString('en-GB')}</div>
                                    <div style={{ color: 'rgb(141 255 132)' }}>Wins: {r2v2.wins}</div>
                                    <div style={{ color: 'rgb(255 57 43)' }}>Loss: {r2v2.loss}</div>
                                    <div>Rating: {r2v2.rating}</div>
                                </div>
                            ))}
                    </div>

                    <div className={styles.graph__history__container}>
                        <h1>3v3</h1> <hr />
                        {player.rating3v3
                            .slice(Math.max(player.rating3v3.length - maxRows, 0))
                            .reverse()
                            .map((r3v3, index) => (
                                <div className={styles.graph__history} key={index}>
                                    <div>Date: {new Date(r3v3.date).toLocaleDateString('en-GB')}</div>
                                    <div style={{ color: 'rgb(141 255 132)' }}>Wins: {r3v3.wins}</div>
                                    <div style={{ color: 'rgb(255 57 43)' }}>Loss: {r3v3.loss}</div>
                                    <div>Rating: {r3v3.rating}</div>
                                </div>
                            ))}
                    </div>

                    <div className={styles.graph__history__container}>
                        <h1>RBG</h1> <hr />
                        {player.ratingrbg
                            .slice(Math.max(player.ratingrbg.length - maxRows, 0))
                            .reverse()
                            .map((rrbg, index) => (
                                <div className={styles.graph__history} key={index}>
                                    <div>Date: {new Date(rrbg.date).toLocaleDateString('en-GB')}</div>
                                    <div style={{ color: 'rgb(141 255 132)' }}>Wins: {rrbg.wins}</div>
                                    <div style={{ color: 'rgb(255 57 43)' }}>Loss: {rrbg.loss}</div>
                                    <div>Rating: {rrbg.rating}</div>
                                </div>
                            ))}
                    </div>
                </motion.div>
        </>
    );
}

export default History;
