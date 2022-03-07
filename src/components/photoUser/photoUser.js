import React from 'react';

const PhotoUser = ({ item }) => {
    return (
        <div className='photoUserData' style={{ backgroundImage: `url(${item.thumbnailUrl})` }}>

        </div>

    )
}

export default PhotoUser;