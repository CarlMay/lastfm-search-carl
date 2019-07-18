import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchReleases} from '../actions';

class ReleaseDetails extends Component {

    componentDidMount() {
        this.props.searchReleases(this.props.artistId);
    }

    render(){
        console.log('---ReleaseDetails', this.props);

        return(
            <div>
                <div className="ui container grid">
                    <div className="one wide column">Star</div>
                    <div className="two wide column">Year</div>
                    <div className="three wide column">Title</div>
                    <div className="three wide column">Release label</div>
                    <div className="three wide column">Number of tracks</div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        releases: state.mindz.releases,
    };
};


export default connect(
    mapStateToProps,
    {searchReleases}
)(ReleaseDetails);
