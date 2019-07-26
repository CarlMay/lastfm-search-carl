import React, {Component} from 'react';
import ContentContainer from "../ui/content-container";
import SearchBar from '../shared/searchBar';
import ArtistList from './components/mindz/artistList';

import {connect} from 'react-redux';
import {searchArtist} from '../../actions';


class StreamSearchBrainz extends Component {

    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }


    // async onSearchSubmit(term) {
    //     const response = await mindz.get('release/?', {
    //         params: {query: term},
    //     });
    //     this.setState({artists: response.data.artists});
    // }

    onSearchSubmit(formValues){
        // console.log('---onSearchSubmit::formValues', formValues);
        this.props.searchArtist(formValues);
    }

    render() {
        const {artists} = this.props;
        const hasReleaseData = !!(artists && artists.length > 0);

        return (
            <ContentContainer>
                <h1 className={'ui header'}>Search MusicBrainz</h1>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {hasReleaseData &&
                <ArtistList artists={artists} />
                }
            </ContentContainer>)
    }
}

const mapStateToProps = (state) => {
    return {
        artists: state.mindz.artists,
    };
};


export default connect(
    mapStateToProps,
    {searchArtist}
)(StreamSearchBrainz);




