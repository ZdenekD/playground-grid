import React from 'react';
import styles from './fractionUnit.css';

const FractionUnit = () => (
    <div className={styles.fraction}>
        <h1>Fraction Unit</h1>
        <h2>Fixed fraction</h2>
        <section className={`container ${styles.fixedFraction}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Fixed auto</h2>
        <section className={`container ${styles.fixedAuto}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two fraction</h2>
        <section className={`container ${styles.twoFraction}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two auto</h2>
        <section className={`container ${styles.twoAuto}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Auto fraction</h2>
        <section className={`container ${styles.autoFraction}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Auto fraction auto</h2>
        <section className={`container ${styles.autoFractionAuto}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two fraction column</h2>
        <section className={`container ${styles.twoFractionColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two fraction row</h2>
        <section className={`container ${styles.twoFractionRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>One-two fraction column</h2>
        <section className={`container ${styles.oneTwoFractionColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>One-three fraction column</h2>
        <section className={`container ${styles.oneThreeFractionColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two-four fraction column</h2>
        <section className={`container ${styles.twoFourFractionColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Fixed width fraction column</h2>
        <section className={`container ${styles.fixedWidthFractionColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Percentage width fraction column</h2>
        <section className={`container ${styles.percentageWidthFractionColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Fixed width one-two fraction column</h2>
        <section className={`container ${styles.fixedWidthOneTwoFractionColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>
    </div>
);

export default FractionUnit;
