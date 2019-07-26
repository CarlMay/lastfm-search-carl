import React from 'react';
import ReleaseDetail from '../../../shared/releaseDetails';

class ArtistItem extends React.Component {
    state = {
        isOpen: false,
    };

    constructor(props) {
        super(props);
        this.handleAccordionOpen = this.handleAccordionOpen.bind(this);
    }

    handleAccordionOpen() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {

        const {artists} = this.props;
        const {name, id} = artists;
        const {isOpen} = this.state;

        const accordionText = (isOpen) ? 'Hide' : 'Show';

        const listStyle = {
            backgroundColor: '#f9f9f9',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: 'solid 1px #ccc',
            boxSizing: 'content-box',
            marginTop: 0,
            marginBottom: 0,
        };

        const showReleaseStyle = {
            color: '#397abb',
            textAlign: 'right',
            cursor: 'pointer'
        };

        const showReleaseBlockStyle = {
            textAlign: 'right',
            display: 'block',
        };

        return (
            <div className="ui container">
                <div className="ui container grid" style={listStyle}>
                    <div className="nine wide column">{name}</div>
                    <div className="three wide column" style={showReleaseBlockStyle}>
                        <span onClick={this.handleAccordionOpen}
                              style={showReleaseStyle}>
                            {`${accordionText} Releases`}
                        </span>
                    </div>
                </div>
                {isOpen && <ReleaseDetail artistId={id} />}
            </div>
        );
    }
}

export default ArtistItem;