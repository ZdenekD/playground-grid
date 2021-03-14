import React from 'react';
import styles from './rowsAndColumns.css';

const RowsAndColumns = () => (
    <>
        <h1>Defining rows and columns</h1>
        <h2>Two columns</h2>
        <section className={`container ${styles.twoColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Just rows</h2>
        <section className={`container ${styles.justRows}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two by two</h2>
        <section className={`container ${styles.twoByTwo}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Four by one</h2>
        <section className={`container ${styles.fourByOne}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Just columns</h2>
        <section className={`container ${styles.justColumns}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>
    </>
);

export default RowsAndColumns;
