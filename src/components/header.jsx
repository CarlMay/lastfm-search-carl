import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className={'ui secondary pointing menu'}>
            <div className={'left menu'}>
                <Link to={'/brainz'} className={'item'}>MusicBrainz</Link>
                <Link to={'/last-fm'} className={'item'}>Last FM</Link>
                <Link to={'/favorites'} className={'item'}>Favorites</Link>
            </div>
        </div>
    );
};

export default Header;