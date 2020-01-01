import React from 'react';

import like from '../../assets/icons/like.png';
import dislike from '../../assets/icons/dislike.png';
import bookmark from '../../assets/icons/bookmark.png';

const Drawer = (props) => {
    const { openDrawerID, id, openDrawer } = props;

    return (
        <div className={`drawer ${openDrawerID === id ? `${openDrawer}` : 'false'}`}>
            <div className='container'>
                <span className='icons'>
                    <img className='reaction bookmark' src={bookmark} alt='bookmark'></img>Bookmark
                </span>
                    &nbsp; &nbsp;
                <span className='icons'>
                        <img className='reaction' src={like} alt='like'></img> Like
                </span>
                    &nbsp; &nbsp;
                <span className='icons'>
                        <img className='reaction' src={dislike} alt='dislike'></img> dislike
                </span>
            </div>
        </div>
    )
}


export default Drawer;