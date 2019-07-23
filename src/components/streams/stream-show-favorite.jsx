import React, {Component} from 'react';
import ContentContainer from "../ui/content-container";
import ArtistList from '../artistList';
import {connect} from "react-redux";
import {fetchLastFmFavorites, removeFromLastFmFavorites} from "../../actions";

class StreamShowFavorites  extends Component {

    state = {
        term: '',
    };

    // constructor(props) {
    //     super(props);
    //     // this.onSearchSubmit = this.onSearchSubmit.bind(this);
    // }
    render(){
        const {favorites} = this.props;
        const hasFavorites = !!(favorites && favorites.length > 0);

        console.log('---favorites', favorites);

        return (
            <ContentContainer>
                <h1 className={'ui header'}>Favorites</h1>
                {hasFavorites &&
                    <ArtistList artists={favorites}/>
                }
            </ContentContainer>
        );

    }
}


const mapStateToProps = (state) => {
    return {
        favorites: state.lastFm.favorites,
    };
};

export default connect(
    mapStateToProps,
    {fetchLastFmFavorites, removeFromLastFmFavorites}
)(StreamShowFavorites);