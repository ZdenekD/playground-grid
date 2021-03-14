import React from 'react';
import styles from './content.css';

const Content = () => (
    <>
        <h1>Max-content and min-content property</h1>
        <h2>Min content</h2>
        <section className={`container ${styles.minContent}`}>
            <div className="item">
                Bacon ipsum dolor amet strip steak venison picanha bacon salami frankfurter ground round shoulder rump
                porchetta corned beef pork chop sirloin.
            </div>
            <div className="item" />
        </section>

        <h2>Max content</h2>
        <section className={`container ${styles.maxContent}`}>
            <div className="item">
                Bacon ipsum dolor amet strip steak venison picanha bacon salami frankfurter ground round shoulder rump
                porchetta corned beef pork chop sirloin. Hamburger prosciutto shoulder sirloin chislic chuck biltong
                short loin filet mignon.
            </div>
            <div className="item" />
        </section>

        <h2>Min and max content in minmax function</h2>
        <section className={`container ${styles.minMaxContent}`}>
            <div className="item">
                Bacon ipsum dolor amet strip steak venison picanha bacon salami frankfurter ground round shoulder rump
                porchetta corned beef pork chop sirloin. Hamburger prosciutto shoulder sirloin chislic chuck biltong
                short loin filet mignon.
            </div>
            <div className="item" />
        </section>

        <h2>Fixed fit-content</h2>
        <section className={`container ${styles.fixedFitContent}`}>
            <div className="item">
                Bacon ipsum dolor amet strip steak venison picanha bacon salami frankfurter ground round shoulder rump
                porchetta corned beef pork chop sirloin. Hamburger prosciutto shoulder sirloin chislic chuck biltong
                short loin filet mignon.
            </div>
            <div className="item" />
        </section>

        <h2>Percentage fit-content</h2>
        <section className={`container ${styles.percentageFitContent}`}>
            <div className="item">
                Bacon ipsum dolor amet strip steak venison picanha bacon salami frankfurter ground round shoulder rump
                porchetta corned beef pork chop sirloin. Hamburger prosciutto shoulder sirloin chislic chuck biltong
                short loin filet mignon.
            </div>
            <div className="item" />
        </section>

        <h2>Auto fit-content</h2>
        <h3>You can&apos;t use `auto` unit as fit-content value (it&apos;s invalid)</h3>
        <section className={`container ${styles.autoFitContent}`}>
            <div className="item">
                Bacon ipsum dolor amet strip steak venison picanha bacon salami frankfurter ground round shoulder rump
                porchetta corned beef pork chop sirloin. Hamburger prosciutto shoulder sirloin chislic chuck biltong
                short loin filet mignon.
            </div>
            <div className="item" />
        </section>

        <h2>Fraction fit-content</h2>
        <h3>You can&apos;t use `fraction` unit as fit-content value (it&apos;s invalid)</h3>
        <section className={`container ${styles.fractionFitContent}`}>
            <div className="item">
                Bacon ipsum dolor amet strip steak venison picanha bacon salami frankfurter ground round shoulder rump
                porchetta corned beef pork chop sirloin. Hamburger prosciutto shoulder sirloin chislic chuck biltong
                short loin filet mignon.
            </div>
            <div className="item" />
        </section>
    </>
);

export default Content;
