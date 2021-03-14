import React from 'react';
import styles from './movingItems.css';

const MovingItems = () => (
    <div className={styles.movingItems}>
        <h1>Moving items to different columns</h1>

        <h2>First item starts at second column</h2>
        <section className={`container ${styles.oneToSecondStart}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
        </section>

        <h2>First item starts at third column</h2>
        <section className={`container ${styles.oneToThirdStart}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
        </section>

        <h2>First item ends at fifth column</h2>
        <section className={`container ${styles.oneToFifthEnd}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
        </section>

        <h2>Third item starts at first column</h2>
        <section className={`container ${styles.thirdToOneStart}`}>
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

export default MovingItems;
