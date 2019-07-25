import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchReleases, addToMindzFavorites} from '../actions';
import StarButton from './ui/star-button';

class ReleaseDetails extends Component {
    static defaultProps = {
        label: 'default',
    };

    componentDidMount() {
        this.props.searchReleases(this.props.artistId);
        this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
        this.handleRemoveFromFavorites = this.handleRemoveFromFavorites.bind(this);
    }

    handleAddToFavorites(releaseId, artistId) {
        const release = {
            'releaseId': releaseId,
            'artistId': artistId,
        };
        console.log('---handleAddToFavorites', release);
        this.props.addToMindzFavorites(release);
    };

    handleRemoveFromFavorites(releaseId, artistId) {
        const release = {
            'releaseId': releaseId,
            'artistId': artistId,
        };
        console.log('---handleRemoveFromFavorites', release);
        // this.props.removeFromMindzFavorites(release);

    };

    findLabelHelper = (labelInfo) => {
        if (!labelInfo || !labelInfo.length) return '';
        return labelInfo.reduce((acc, current) => {
            if (!!acc) return acc;
            if (current.label && current.label.name) return current.label.name;
            return acc;
        }, null);
    };


    renderDetails() {
        const releases = this.props.ArtistReleases[this.props.artistId];

        //TODO: fix this!
        if (!releases || releases.length === 0) {
            return (<div>Loading...</div>)
        }


        return (

            releases.map((release) => {
                // console.log('---release', release);
                const {id, title, date, "label-info": labelInfo, "track-count": tracks} = release;
                const label = this.findLabelHelper(labelInfo);
                // const name = artistInfo[0].artist;

                // console.log('---artistInfo', artistInfo);
                // console.log('---artist', name);

                const rowStyle = {
                    marginBottom: 0,
                    marginTop: 0,
                };

                return (
                    <div className="row" key={id}>
                        <div className="one wide column" style={rowStyle}>
                            <StarButton
                                addToFavorites={this.handleAddToFavorites}
                                removeFromFavorites={this.handleRemoveFromFavorites}
                                id={id}
                                name={this.props.artistId}
                                selected={false}
                            />
                        </div>
                        <div className="two wide column" style={rowStyle}>{date}</div>
                        <div className="three wide column" style={rowStyle}>{title}</div>
                        <div className="three wide column" style={rowStyle}>{label}</div>
                        <div className="three wide column" style={rowStyle}>{tracks}</div>
                    </div>
                );


            })
        );
    }


    render() {
        const rowStyle = {
            marginBottom: 0,
            marginTop: 0,
        };

        const listStyle = {
            paddingBottom: '10px',
        };

        return (
            <div className="ui container five column grid vertically divided" style={listStyle}>
                <div className="row">
                    <div className="one wide column" style={rowStyle}></div>
                    <div className="two wide column" style={rowStyle}>Year</div>
                    <div className="three wide column" style={rowStyle}>Title</div>
                    <div className="three wide column" style={rowStyle}>Release label</div>
                    <div className="three wide column" style={rowStyle}>Number of tracks</div>
                </div>
                {this.renderDetails()}
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        ArtistReleases: state.mindz.ArtistReleases,
        favoriteReleases: state.mindz.favoriteReleases,
    };
};


export default connect(
    mapStateToProps,
    {
        searchReleases,
        addToMindzFavorites,
        // removeFromMindzFavorites,
    }
)(ReleaseDetails);
