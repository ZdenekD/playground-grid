import React from 'react';
import styles from './autoTrackSizes.css';

const AutoTrackSizes = () => (
    <>
        <h1>Auto track sizes</h1>
        <h2>Two equal size column</h2>
        <section className={`container ${styles.twoEqualSizeColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two equal size row</h2>
        <section className={`container ${styles.twoEqualSizeRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Three equal size column</h2>
        <section className={`container ${styles.threeEqualSizeColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Three equal size row</h2>
        <section className={`container ${styles.threeEqualSizeRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
        </section>

        <h2>Four equal size column</h2>
        <section className={`container ${styles.fourEqualSizeColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Fixed auto column</h2>
        <section className={`container ${styles.fixedAutoColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Fixed one column larger</h2>
        <section className={`container ${styles.fixedOneColumnLarger}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">40000000000000000000</div>
        </section>
    </>
);

export default AutoTrackSizes;
