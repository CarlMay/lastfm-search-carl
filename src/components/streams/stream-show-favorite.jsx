import React, {Component} from 'react';
import ContentContainer from "../ui/content-container";
import ArtistList from './components/mindz/artistList';
import {connect} from "react-redux";
import {fetchLastFmFavorites, removeFromLastFmFavorites} from "../../actions";

class StreamShowFavorites  extends Component {

    render(){
        const {favoritesArtists, removeFromLastFmFavorites} = this.props;
        const hasFavorites = !!(favoritesArtists && favoritesArtists.length > 0);

        return (
            <ContentContainer>
                <h1 className={'ui header'}>Favorites</h1>
                {hasFavorites &&
                    <ArtistList artists={favoritesArtists} removeFromFavorites={removeFromLastFmFavorites} section={'favorites'}/>
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
        favoritesArtists: state.lastFm.favoritesArtists,
    };
};

export default connect(
    mapStateToProps,
    {fetchLastFmFavorites, removeFromLastFmFavorites}
)(StreamShowFavorites);