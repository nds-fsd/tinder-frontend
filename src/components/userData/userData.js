import React from 'react';


const UserData = ({ item }) => {

    return (
        <div className='userData'>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.city}</p>
        </div>)
}

export default UserData;