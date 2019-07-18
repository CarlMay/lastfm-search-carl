import React from 'react';
import ReleaseItem from './releaseItem';

const ReleaseList = (props) => {
    const releaseData = props.releases.map((release) => {
        return <ReleaseItem key={release.id} release={release}  />;
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
        // marginBottom: '0',
        fontWeight: 'bold'
    };

    return(
        <div>
            <h3 className={'ui header'} style={headerStyle}>Search Results:</h3>
            <p style={titleStyle}>Artist Name</p>
            <div style={listContainerStyle}>{releaseData}</div>
        </div>
    );
};

export default ReleaseList;