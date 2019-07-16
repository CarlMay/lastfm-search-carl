import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
    StreamSearchBrainz,
    StreamSearchLastFM,
    StreamShowFavorites,
} from "./streams";

import Header from "./header";

const App = () => {
    return (
        <div className={'ui container'}>
            <BrowserRouter>
                <Header />
                <Route path={'/'} exact component={StreamSearchLastFM} />
                <Route path={'/last-fm'} exact component={StreamSearchLastFM} />
                <Route path={'/brainz'} exact component={StreamSearchBrainz} />
                <Route path={'/favorites'} exact component={StreamShowFavorites} />
            </BrowserRouter>
        </div>
    );
};
export default App;