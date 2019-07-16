import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
    StreamSearchBrainz,
    StreamSearchLastFM,
    StreamShowFavorites,
} from "./streams";

const App = () => {
    return (
        <div className={'ui container'}>
            <BrowserRouter>

                <Route path={'/'} exact component={StreamShowFavorites} />
                <Route path={'/search/last-fm'} exact component={StreamSearchLastFM} />
                <Route path={'/search/brainz'} exact component={StreamSearchBrainz} />
            </BrowserRouter>
        </div>
    );
};
export default App;