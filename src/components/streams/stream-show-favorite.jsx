import React, {Component} from 'react';
import ContentContainer from "../ui/content-container";
import ArtistList from '../artistList';
import {connect} from "react-redux";
import {fetchLastFmFavorites, removeFromLastFmFavorites} from "../../actions";

class StreamShowFavorites  extends Component {

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
                {!hasFavorites &&
                    <div className="ui container two column grid vertically divided left aligned">
                        <div className="row" >
                            <div className="fourteen wide column left aligned" >Please select an artist to
                                add to your favorites from the short list.
                            </div>
                        </div>
                    </div>
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