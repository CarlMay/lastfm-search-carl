import React from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'semantic-ui-react';

const Header = () => {

    const iconStyle = {
        width: 'auto',
        height: 'auto',
        marginRight: '0.25rem'
    };

    const navStyle = {
        backgroundColor: '#222',
    };

    const linkStyle = {
        color: '#999',
        cursor: 'pointer',
        marginRight: '1rem',
    };

    return (
        <div className={'ui secondary pointing menu'} style={navStyle}>
            <div className={'left menu'}>
                <Link to={'/brainz'} className={'item'} style={linkStyle}>
                    <Image src='/images/music-brainz.png' size='mini' style={iconStyle}/>
                    <span>MusicBrainz</span>
                </Link>

                <Link to={'/last-fm'} className={'item'} style={linkStyle}>
                    <Image src='/images/last-fm.png' size='mini' style={iconStyle}/>
                    <span>Last FM</span>
                </Link>
                <Link to={'/favorites'} className={'item'} style={linkStyle}>
                    <Image src='/images/favs.png' size='mini' style={iconStyle}/>
                    <span>Favorites</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;