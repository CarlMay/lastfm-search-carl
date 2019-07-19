import React from 'react';
import ArtistItem from './artistItem';

const ArtistList = (props) => {
    const artistData = props.artists.map((artist) => {
        return <ArtistItem key={artist.id} artists={artist} />;
    });

    // console.log('---ArtistList artists', props.artists);

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

    return(
        <div>
            <h3 className={'ui header'} style={headerStyle}>Search Results:</h3>
            <p style={titleStyle}>Artist Name</p>
            <div style={listContainerStyle}>{artistData}</div>
        </div>
    );
};

export default ArtistList;