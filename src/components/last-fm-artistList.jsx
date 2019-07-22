import React from 'react';
import LastFmArtistItem from './last-fm-artistItem';

const LastFmArtistList = (props) => {

    console.log('---shortlist', props.shortlist);

    const artistData = props.artists.map((artist, index) => {
        return <LastFmArtistItem key={index} artists={artist} addToShortlist={props.addToShortlist}/>;
    });

    const headerStyle = {
        marginTop: '2rem',
        borderBottom: 'solid 1px #ccc',
    };

    const listContainerStyle = {
        marginBottom: '2rem',
    };

    const buttonStyle = {
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'flex-end'
    };

    const titleStyle = {
        borderBottom: 'solid 1px #eee',
        paddingBottom: '0.5rem',
        marginTop: '0',
        marginBottom: '0',
        fontWeight: 'bold'
    };


    return(
        <div>
            <h3 className={'ui header'} style={headerStyle}>Search Results:</h3>
            <div style={buttonStyle}><button className={'ui basic button mini'}>Show short-list</button></div>
            <p style={titleStyle}>Artist Name</p>
            <div style={listContainerStyle}>{artistData}</div>
        </div>
    );
};

export default LastFmArtistList;