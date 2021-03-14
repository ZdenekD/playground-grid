import React from 'react';
import styles from './repeat.css';

const Repeat = () => (
    <>
        <h1>Repeat function</h1>
        <h2>Repeat fixed</h2>
        <section className={`container ${styles.repeatFixed}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Repeat percentage</h2>
        <section className={`container ${styles.repeatPercentage}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Repeact fraction</h2>
        <section className={`container ${styles.repeatFraction}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Repeact minmax</h2>
        <section className={`container ${styles.repeatMinmax}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Repeat multiple columns</h2>
        <section className={`container ${styles.repeatMultipleColumns}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
            <div className="item">9</div>
        </section>

        <h2>Both set and repeact columns</h2>
        <section className={`container ${styles.bothSetAndRepeatColumns}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
            <div className="item">9</div>
        </section>
    </>
);

export default Repeat;
