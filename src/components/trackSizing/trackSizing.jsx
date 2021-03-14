import React from 'react';
import styles from './trackSizing.css';

const TrackSizing = () => (
    <>
        <h1>Fixed and percentage track sizing</h1>
        <h2>Two vw columns</h2>
        <section className={`container ${styles.twoVwColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two vw row</h2>
        <section className={`container ${styles.twoVWRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two vh column</h2>
        <section className={`container ${styles.twoVhColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two vh row</h2>
        <section className={`container ${styles.twoVhRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two vmax column</h2>
        <section className={`container ${styles.twoVmaxColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two vmax row</h2>
        <section className={`container ${styles.twoVmaxRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two vmin column</h2>
        <section className={`container ${styles.twoVminColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two vmin row</h2>
        <section className={`container ${styles.twoVminRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two em column</h2>
        <section className={`container ${styles.twoEmColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two em row</h2>
        <section className={`container ${styles.twoEmRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two rem column</h2>
        <section className={`container ${styles.twoRemColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two rem row</h2>
        <section className={`container ${styles.twoRemRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two fixed column</h2>
        <section className={`container ${styles.twoFixedColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two fixed row</h2>
        <section className={`container ${styles.twoFixedRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two percentage column</h2>
        <section className={`container ${styles.twoPercentageColumn}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>

        <h2>Two percentage row</h2>
        <section className={`container ${styles.twoPercentageRow}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>
    </>
);

export default TrackSizing;
