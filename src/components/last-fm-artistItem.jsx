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
    }

    handleAddToShortList() {
        console.log('--handleAddToShortList', this.props.artists);
        this.props.addToShortlist(this.props.artists);
    };

    render() {

        const {artists} = this.props;
        const {name, image } = artists;

        // console.log('---props', this.props);
        // const accordionText = (isOpen) ? 'Hide' : 'Show';

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
                    <button className={'ui circular green icon button'}>
                        <i aria-hidden="true"
                           className="plus icon"
                           onClick={this.handleAddToShortList}></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default LastFmArtistItem;