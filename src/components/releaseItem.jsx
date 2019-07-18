import React from 'react';

class ReleaseItem extends React.Component {
    state = {
        isOpen: false,
    };

    constructor(props) {
        super(props);
        this.handleAccordionOpen = this.handleAccordionOpen.bind(this);
    }

    // const releaseData = props.releases.map((release) => {
    //     return <ImageCard key={release.id} release={release}  />;
    // });

    handleAccordionOpen() {
        console.log('--handleAccordionOpen', this.state.isOpen);
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {

        const {release} = this.props;
        const {title, date} = release;
        const {isOpen} = this.state;
        console.log('---releaseItem', release);

        const accordionText = (isOpen) ? 'Hide' : 'Show';

        const listStyle = {
            backgroundColor: '#f9f9f9',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: 'solid 1px #ccc',
            boxSizing: 'content-box'
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
                    <div className="nine wide column">{title}</div>
                    <div className="three wide column" style={showReleaseBlockStyle}>
                        <span onClick={this.handleAccordionOpen}
                              style={showReleaseStyle}>{`${accordionText} Releases`}</span>
                    </div>
                </div>
                {isOpen &&
                <div>
                    <div className="ui container grid">
                        <div className="three wide column">{date}</div>
                        <div className="three wide column">{title}</div>
                        <div className="three wide column">{title}</div>
                    </div>
                    <div className="ui container grid">
                        <div className="three wide column">{date}</div>
                        <div className="three wide column">{title}</div>
                        <div className="three wide column">{title}</div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default ReleaseItem;