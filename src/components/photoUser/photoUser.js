import React from 'react';

const PhotoUser = ({ item }) => {
    return (
        <div className='photoUser' style={{ backgroundImage: `url(${item.thumbnailUrl})` }}>

        </div>

    )
}

export default PhotoUser;