import React, { Fragment, Component } from 'react';

import './index.scss';
import cityfalcon from '../../assets/icons/cityfalcon.png';
import avatar from '../../assets/icons/avatar.png';
import menu from '../../assets/icons/menu.png';
import caret from '../../assets/icons/caret-down.png';


class Header extends Component {
    state = {
        showSignout: false
    }

    showSignout = () => {
        this.setState(prevstate => ({showSignout: !prevstate.showSignout})) 
    }

    render (){
    return(
        <Fragment>
        <div className='header'>
            <img  className='logo' src={cityfalcon} alt='logo'></img>
            <img src={menu} className='menu' alt='menu'></img>
            <div className={`profile-section ${this.state.showSignout ? 'open': 'closed'}`}>
                <img className='avatar' src={avatar} alt='avatar'></img>
                <span className='profile' onClick={this.showSignout}>Jane Doe</span>
                <img className={`profile-drop ${this.state.showSignout ? 'up': ''}`} src={caret} alt='more'></img>
            </div>
        </div>
        <div className={`signout ${this.state.showSignout ? '': 'hide'}`}>Sign  Out</div>
        </Fragment>

    ); 
}
}

export default Header;