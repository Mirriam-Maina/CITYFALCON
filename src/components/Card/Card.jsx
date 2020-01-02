import React, { Fragment } from 'react';

import './index.scss';
import readmore from '../../assets/icons/readmore.png';
import twitter from '../../assets/icons/twitter.png';

const Card = (props) => {
    const { score, timeDiff, title, logo,
        openArticle, toggleDrawer, id,
        openDrawerID, openDrawer, domainName,
        screenName, authorImage, followerCount, isTweet } = props;

    return (
        <Fragment>
            <div className={`card ${openDrawerID === id && openDrawer ? 'open' : ''}`}>
                <img className='sourceImage' src={authorImage ? authorImage : logo} alt='source'></img>
                <div className='title' onClick={openArticle}>{title}</div>
                <div className='timestamp'>
                    {isTweet ? <span><img src={twitter} className='socialIcon' alt='social'></img></span> : null}
                <span>@{screenName ? screenName : domainName}</span>
                    &nbsp;&nbsp;
                <span>{timeDiff} ago</span>
                    &nbsp;&nbsp;
                    {isTweet && openDrawerID === id && openDrawer ? <span>follower / ing ratio: {followerCount} </span> : null}
                </div>
                <div className='percentage'>{score}%</div>
                <img
                    className={`readmore ${openDrawerID === id ? `${openDrawer}` : 'false'}`}
                    src={readmore} 
                    alt='read-more'
                    onClick={() => toggleDrawer(id)}
                />
            </div>
        </Fragment>
    );
}

export default Card;