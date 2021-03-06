import React, {Component} from 'react';
import ContentContainer from '../ui/content-container';
import {connect} from "react-redux";
import {searchLastFmArtist, addToLastFmShortlist, removeFromLastFmShortlist} from "../../actions";
import SearchBar from "../shared/searchBar";
import LastFmArtistList from "./components/last-fm/last-fm-artistList";

class StreamSearchLastFM extends Component {

    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchSubmit(formValues){
        // console.log('---onSearchSubmit::formValues', formValues);
        this.props.searchLastFmArtist(formValues);
    }

    render() {
        const {artists, addToLastFmShortlist, removeFromLastFmShortlist, shortlist} = this.props;
        const hasReleaseData = !!(artists && artists.length > 0);

        return (
            <ContentContainer>
                <h1 className={'ui header'}>Search Last.fm</h1>

                <SearchBar onSubmit={this.onSearchSubmit}/>
                {hasReleaseData &&
                    <LastFmArtistList artists={artists} addToShortlist={addToLastFmShortlist} removeFromShortlist={removeFromLastFmShortlist} shortlist={shortlist} />
                }
            </ContentContainer>)
    }
}

const mapStateToProps = (state) => {
    return {
        artists: state.lastFm.artists,
        shortlist: state.lastFm.shortlist,
    };
};

export default connect(
    mapStateToProps,
    {
        searchLastFmArtist,
        addToLastFmShortlist,
        removeFromLastFmShortlist
    }
)(StreamSearchLastFM);
