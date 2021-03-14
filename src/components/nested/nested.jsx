import React from 'react';
import styles from './nested.css';

const Nested = () => (
    <div className={styles.nested}>
        <h1>Grid nested into grid item</h1>
        <section className="container">
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">
                <div className="container">
                    <div className="item">1.1</div>
                    <div className="item">1.2</div>
                    <div className="item">1.3</div>
                    <div className="item">1.4</div>
                </div>
            </div>
        </section>
    </div>
);

export default Nested;
