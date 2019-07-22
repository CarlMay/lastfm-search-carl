import React, {Component} from 'react';
import LastFmArtistItem from './last-fm-artistItem';
import ShortList from './shortlist';

import {connect} from "react-redux";
import {fetchLastFmShortlist} from "../actions";

class LastFmArtistList extends Component {

    state = {
        showShortList: false,
    };

    constructor(props) {
        super(props);
        this.toggleShortlist = this.toggleShortlist.bind(this);
    }


    toggleShortlist(){
        this.setState({showShortList: !this.state.showShortList})
    }

    render() {
        const {artists, addToShortlist, shortlist} = this.props;

        const artistData = artists.map((artist, index) => {
            return <LastFmArtistItem key={index} artists={artist} addToShortlist={addToShortlist}/>;
        });

        const headerStyle = {
            marginTop: '2rem',
            borderBottom: 'solid 1px #ccc',
        };

        const listContainerStyle = {
            marginBottom: '2rem',
        };

        const titleStyle = {
            borderBottom: 'solid 1px #eee',
            paddingBottom: '0.5rem',
            marginTop: '0',
            marginBottom: '0',
            fontWeight: 'bold'
        };


        return (
            <div>
                <h3 className={'ui header'} style={headerStyle}>Search Results:</h3>
                <ShortList shortlist={shortlist} />
                <p style={titleStyle}>Artist Name</p>
                <div style={listContainerStyle}>{artistData}</div>
            </div>
        );

    }
}


const mapStateToProps = (state) => {
    return {
        shortlist: state.lastFm.shortlist,
    };
};

export default connect(
    mapStateToProps,
    {fetchLastFmShortlist}
)(LastFmArtistList);