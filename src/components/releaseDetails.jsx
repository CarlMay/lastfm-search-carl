import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchReleases} from '../actions';

class ReleaseDetails extends Component {

    componentDidMount() {
        this.props.searchReleases(this.props.artistId);
    }


    renderDetails() {
        // console.log('---release', this.props.releases);
        return (
            this.props.releases.map((release) => {
                const {id, title, date, "label-info": labelInfo, "track-count": tracks} = release;

                // console.log('---labelInfo name',labelInfo[0].label.name);
                // console.log('---find', labelInfo.find(info => info.label === 'label'));

                // user => user.id === ownProps.userId)
                // labelInfo !== null && labelInfo.length > 0 && labelInfo[0].label.name !== null

                // const releaseLabel = (labelInfo[0].label.name !== null) ? labelInfo[0].label.name : '';
                // console.log('---releaseLabel',releaseLabel);

                const rowStyle = {
                    marginBottom: 0,
                    marginTop: 0,
                };

                return (
                    <div className="row" key={id}>
                        <div className="one wide column" style={rowStyle}>
                            <i aria-hidden="true" className="star outline large icon middle aligned"></i>
                        </div>
                        <div className="two wide column" style={rowStyle}>{date}</div>
                        <div className="three wide column" style={rowStyle}>{title}</div>
                        <div className="three wide column" style={rowStyle}>label</div>
                        <div className="three wide column" style={rowStyle}>{tracks}</div>
                    </div>
                );
            })
        );
    }

    render() {
        // console.log('---ReleaseDetails', this.props);
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
        releases: state.mindz.releases,
    };
};


export default connect(
    mapStateToProps,
    {searchReleases}
)(ReleaseDetails);
