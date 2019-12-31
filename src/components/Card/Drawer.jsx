import React from 'react';

const Drawer = () => {
    return(
    <div className='drawer'>
        <span>Bookmark</span> &nbsp; &nbsp;
        <span>
            <img className='reaction' src={like}></img> Like
        </span> &nbsp; &nbsp;
        <span>
            <img className='reaction' src={dislike}></img> dislike
        </span>
    </div>
    )
}


export default Drawer;