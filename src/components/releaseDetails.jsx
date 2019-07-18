import React from 'react';

const ReleaseDetails = (props) => {

    console.log('---ReleaseDetails', props);

    return(
        <div>
            <div className="ui container grid">
                <div className="three wide column">date</div>
                <div className="three wide column">title</div>
                <div className="three wide column">title</div>
            </div>
        </div>
    );
};

export default ReleaseDetails;