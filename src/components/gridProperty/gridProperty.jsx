import React from 'react';
import styles from './gridProperty.css';

const GridProperty = () => (
    <>
        <h1>Grid property</h1>
        <section className={`container ${styles.grid}`}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>
    </>
);

export default GridProperty;
