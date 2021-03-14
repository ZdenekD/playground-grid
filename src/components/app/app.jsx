import React from 'react';
import MovingItems from '../movingItems/movingItems';
import Reordering from '../reordering/reordering';
import Nested from '../nested/nested';
import Gaps from '../gaps/gaps';
import Repeat from '../repeat/repeat';
import Content from '../content/content';
import Minmax from '../minmax/minmax';
import FractionUnit from '../fractionUnit/fractionUnit';
import AutoTrackSizes from '../autoTrackSizes/autoTrackSizes';
import RowsAndColumns from '../rowsAndColumns/rowsAndColumns';
import GridProperty from '../gridProperty/gridProperty';
import TrackSizing from '../trackSizing/trackSizing';
import './app.css';

const App = () => (
    <>
        <MovingItems />
        <Reordering />
        <Nested />
        <Gaps />
        <Repeat />
        <Content />
        <Minmax />
        <FractionUnit />
        <AutoTrackSizes />
        <TrackSizing />
        <GridProperty />
        <RowsAndColumns />

        <section className="inlineContainer">
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
        </section>
    </>
);

export default App;
