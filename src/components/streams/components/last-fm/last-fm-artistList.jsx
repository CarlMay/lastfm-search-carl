import React from 'react';
import LastFmArtistItem from './last-fm-artistItem';
import ShortList from './shortlist';


const LastFmArtistList = (props) => {

    const {artists, addToShortlist, removeFromShortlist, shortlist} = props;

    const artistData = artists.map((artist, index) => {
        return <LastFmArtistItem key={index} artists={artist} addToShortlist={addToShortlist} removeFromShortlist={removeFromShortlist} shortlist={shortlist}/>;
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
            <ShortList />
            <p style={titleStyle}>Artist Name</p>
            <div style={listContainerStyle}>{artistData}</div>
        </div>
    );

};


export default LastFmArtistList