import React, {Component} from 'react';
import minds from '../../apis/minds';
import ContentContainer from "../ui/content-container";
import SearchBar from '../searchBar';
import ReleaseList from '../releaseList';


class StreamSearchBrainz extends Component {
    state = {
        releases: [],
    };

    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }


    async onSearchSubmit(term) {
        const response = await minds.get('release/?', {
            params: {query: term},
        });
        this.setState({releases: response.data.releases});
    }

    render() {
        const {releases} = this.state;
        const hasReleaseData = !!(releases && releases.length > 0);

        return (
            <ContentContainer>
                <h1 className={'ui header'}>Search MusicBrainz</h1>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {hasReleaseData &&
                <ReleaseList releases={releases}/>
                }
            </ContentContainer>)
    }
}

export default StreamSearchBrainz;




