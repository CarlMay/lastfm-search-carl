import React from 'react';
import {Image} from "semantic-ui-react";
import './last-fm-artist-list.css';

class LastFmArtistItem extends React.Component {
    state = {
        isOpen: false,
    };

    constructor(props) {
        super(props);
        this.handleAddToShortList = this.handleAddToShortList.bind(this);
        this.handleRemoveFromShortList = this.handleRemoveFromShortList.bind(this);
    }

    handleAddToShortList() {
        this.props.addToShortlist(this.props.artists);
    };

    handleRemoveFromShortList() {
        this.props.removeFromShortlist(this.props.artists);
    };

    render() {

        const {artists, shortlist} = this.props;
        const {name, image, mbid } = artists;
        const isInShortList = shortlist.find(item => item.id === mbid);

        const listStyle = {
            backgroundColor: '#f9f9f9',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: 'solid 1px #ccc',
            boxSizing: 'content-box',
            marginTop: 0,
            marginBottom: 0,
        };


        const iconStyle = {
            width: 'auto',
            height: 'auto'
        };

        return (
            <div className="ui container">
                <div className="ui container artist-list" style={listStyle}>
                    <Image src={image[0]["#text"]} size='mini' style={iconStyle}/>
                    <div className="artist-name">{name}</div>
                    {!isInShortList &&
                        <button
                            className={'ui circular green mini icon button'}
                            onClick={this.handleAddToShortList}
                            title={'Add to your shortlist'}
                        >
                            <i aria-hidden="true" className="plus icon"></i>
                        </button>
                    }
                    {isInShortList &&
                        <button
                            className={'ui circular red icon mini button'}
                            onClick={this.handleRemoveFromShortList}
                            title={'Remove from your shortlist'}
                        >
                            <i aria-hidden="true" className="minus icon"></i>
                        </button>
                    }
                </div>
            </div>
        );
    }
}

export default LastFmArtistItem;