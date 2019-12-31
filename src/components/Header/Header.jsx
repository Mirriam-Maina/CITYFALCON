import React, { Fragment } from 'react';

import './index.scss';
import cityfalcon from '../../assets/images/cityfalcon.png';
import avatar from '../../assets/images/avatar.png';
import caret from '../../assets/images/caret-down.png';


const Header = () => {

    return(
        <Fragment>
        <div className='header'>
            <img  className='logo' src={cityfalcon}></img>
            <img className='avatar' src={avatar}></img>
            <span className='profile'>Jane Doe</span>
            <img className='profile-drop' src={caret}></img>
        </div>
        <div className='heading-title'>Watchlist</div>
        </Fragment>

    );
}

export default Header;