import React, {Component} from 'react';
import {Button, Header, Modal} from 'semantic-ui-react'
import {connect} from "react-redux";
import {fetchLastFmShortlist} from "../actions";


class ShortList extends Component {

    constructor(props) {
        super(props);
        this.renderContent = this.renderContent.bind(this);
    }

    renderContent() {

        const listStyle = {
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: 'solid 1px #ccc',
            boxSizing: 'content-box',
            marginTop: 0,
            marginBottom: '1rem',
        };

        const rowStyle = {
            marginBottom: 0,
            marginTop: 0,
            paddingBottom: 0,
        };

        const rowItemStyle = {
            marginBottom: 0,
            marginTop: 0,
            paddingBottom: '0.5rem',
            paddingTop: '0.5rem',
        };


        const titleStyle = {
            marginBottom: 0,
            marginTop: 0,
            fontWeight: 'bold',
        };

        const titleRowStyle = {
            marginBottom: 0,
            marginTop: 0,
        };

        const {shortlist} = this.props;
        const hasShortlist = !!(shortlist.length > 0);

        console.log('---hasShortlist', hasShortlist);

        if(hasShortlist){
            return (
                <div className="ui container two column grid vertically divided left aligned" style={listStyle}>
                    <div className="row" style={titleRowStyle}>
                        <div className="one wide column"></div>
                        <div className="fourteen wide column left aligned" style={titleStyle}>Artist Name</div>
                    </div>
                    {
                        shortlist.map(({id, name}) => {
                            return (
                                <div className="row" key={id} style={rowItemStyle}>
                                    <div className="one wide column" style={rowStyle}>
                                        <i aria-hidden="true"
                                           className="star outline large icon middle aligned"></i>
                                    </div>
                                    <div className="fourteen wide column left aligned" style={rowStyle}>{name}</div>
                                </div>
                            );
                        })
                    }
                </div>
            );
        }else{
            return (
                <div className="ui container two column grid vertically divided left aligned" style={listStyle}>
                    <div className="row" style={titleRowStyle}>
                        <div className="one wide column"></div>
                        <div className="fourteen wide column left aligned" style={titleStyle}>Please select an artist to add to your short list.</div>
                    </div>
                </div>
            );
        }

    }

    render() {

        const modalStyle = {
            padding: 0,
        };

        const buttonStyle = {
            display: 'flex',
            flex: '1 1 auto',
            justifyContent: 'flex-end'
        };

        return (

            <div style={buttonStyle}>
                <Modal
                    trigger={<Button className={'ui compact icon button right align standard mini'}>Show
                        shortlist</Button>}
                    closeIcon>
                    <Header content='My short list.'/>
                    <Modal.Content style={modalStyle}>
                        {this.renderContent()}
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shortlist: state.lastFm.shortlist,
    };
};

export default connect(
    mapStateToProps,
    {fetchLastFmShortlist}
)(ShortList);


