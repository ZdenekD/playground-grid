import React from 'react';
import styles from './reordering.css';

const Reordering = () => (
    <div className={styles.reordering}>
        <h1>Reordering grid items</h1>

        <h2>First item to last position</h2>
        <section className={`container ${styles.oneToLast}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
        </section>

        <h2>Last item to first position</h2>
        <section className={`container ${styles.lastToFirst}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
        </section>

        <h2>Even items to first positions</h2>
        <section className={`container ${styles.evenFirst}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
        </section>
    </div>
);

export default Reordering;
