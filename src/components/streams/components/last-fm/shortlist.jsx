import React, {Component} from 'react';
import {Button, Header, Modal} from 'semantic-ui-react'
import {connect} from "react-redux";
import {
    addToLastFmFavorites,
    fetchLastFmShortlist,
    removeFromLastFmFavorites,
    fetchLastFmFavorites,
} from '../../../../actions';
import StarButton from '../../../ui/star-button';


class ShortList extends Component {

    constructor(props) {
        super(props);
        this.renderContent = this.renderContent.bind(this);
        this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
        this.handleRemoveFromFavorites = this.handleRemoveFromFavorites.bind(this);
    }

    handleAddToFavorites(id, name) {
        const artist = {
            'id': id,
            'name': name,
        };
        this.props.addToLastFmFavorites(artist);
    };

    handleRemoveFromFavorites(id, name) {
        const artist = {
            'id': id,
            'name': name,
        };
        this.props.removeFromLastFmFavorites(artist);

    };

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

        const {shortlist, favoritesArtists} = this.props;
        const hasShortlist = !!(shortlist.length > 0);

        if (hasShortlist) {
            return (
                <div className="ui container two column grid vertically divided left aligned" style={listStyle}>
                    <div className="row" style={titleRowStyle}>
                        <div className="one wide column"></div>
                        <div className="fourteen wide column left aligned" style={titleStyle}>Artist Name</div>
                    </div>
                    {

                        shortlist.map(({id, name}) => {
                            const isSelected = !!(favoritesArtists.find((e) => {
                                return e.id === id;
                            }));

                            return (
                                <div className="row" key={id} style={rowItemStyle}>
                                    <div className="one wide column" style={rowStyle}>
                                        <StarButton
                                            addToFavorites={this.handleAddToFavorites}
                                            removeFromFavorites={this.handleRemoveFromFavorites}
                                            id={id}
                                            name={name}
                                            selected={isSelected}
                                        />
                                    </div>
                                    <div className="fourteen wide column left aligned" style={rowStyle}>{name}</div>
                                </div>
                            );
                        })
                    }
                </div>
            );
        } else {
            return (
                <div className="ui container two column grid vertically divided left aligned" style={listStyle}>
                    <div className="row" style={titleRowStyle}>
                        <div className="one wide column"></div>
                        <div className="fourteen wide column left aligned" style={titleStyle}>Please select an artist to
                            add to your short list.
                        </div>
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
        favoritesArtists: state.lastFm.favoritesArtists,
    };
};

export default connect(
    mapStateToProps,
    {
        fetchLastFmShortlist,
        addToLastFmFavorites,
        removeFromLastFmFavorites,
        fetchLastFmFavorites
    }
)(ShortList);


