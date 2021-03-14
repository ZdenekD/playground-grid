import React from 'react';
import styles from './minmax.css';

const Minmax = () => (
    <>
        <h1>Minmax function</h1>
        <h2>Fixed minmax column</h2>
        <section className={`container ${styles.fixedMinmaxColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Fixed minmax row</h2>
        <section className={`container ${styles.fixedMinmaxRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Fixed percentage minmax column</h2>
        <section className={`container ${styles.fixedPercentageMinmaxColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Fixed fraction minmax column</h2>
        <section className={`container ${styles.fixedFractionMinmaxColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Fixed auto minmax column</h2>
        <section className={`container ${styles.fixedAutoMinmaxColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Auto fixed minmax column</h2>
        <section className={`container ${styles.autoFixedMinmaxColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Multiple minmax column</h2>
        <section className={`container ${styles.multipleMinmaxColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Percentage fixed minmax</h2>
        <section className={`container ${styles.percentageFixedMinmax}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Viewport fixed minmax</h2>
        <section className={`container ${styles.viewportFixedMinmax}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Em fixed minmax</h2>
        <section className={`container ${styles.emFixedMinmax}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Rem fixed minmax</h2>
        <section className={`container ${styles.remFixedMinmax}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Fraction fixed minmax</h2>
        <h3>You can&apos;t use `fraction` unit as minimum value (it&apos;s invalid)</h3>
        <section className={`container ${styles.fractionFixedMinmax}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two fractions minmax</h2>
        <h3>You can&apos;t use `fraction` unit as minimum value (it&apos;s invalid)</h3>
        <section className={`container ${styles.twoFractionsMinmax}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Inner minmax</h2>
        <h3>You can&apos;t use minmax function inside minmax function</h3>
        <section className={`container ${styles.innerMinmax}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>
    </>
);

export default Minmax;
