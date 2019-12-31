import React, { Fragment } from 'react';
import './index.scss';

import logo from '../../assets/images/logo.png';
import readmore from '../../assets/images/readmore.png';
import twitter from '../../assets/images/twitter.png';
import like from '../../assets/images/like.png';
import dislike from '../../assets/images/dislike.png'
import Header from '../Header/Header';


const Card = () => {

return(
    <Fragment>
        <Header />
        <div className='card'>
            <img className='sourceImage' src={logo}></img>
            <div className='title'>Tech stocks lower on failure to RT double bananas. $TWTR down 3%</div>
            <div className='timestamp'>
                <span><img src={twitter} className='socialIcon'></img></span>&nbsp;
                <span>@CBNC</span>
                &nbsp;&nbsp;
                <span>22 hours ago</span>
                &nbsp;&nbsp;
                <span>follower / ing ratio: 134k </span>
            </div>
            <div className='percentage'>55%</div>
            <img className='readmore' src={readmore}></img>
    </div>
    </Fragment>

);



}

export default Card;