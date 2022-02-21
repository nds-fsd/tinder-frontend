import React from 'react';
import data from '../../assets/response.json';
import PhotoUser from '../photoUser/photoUser'
import UserData from '../userData/userData';

const FooterUser = () => {
    return (
        <div>
            <div className="photoUser">
                {data && data.length > 0 && data.map(item => <PhotoUser item={item} id={item._id} key={item._id} onClick={() => { }} />)}
            </div>
            {data && data.length > 0 && data.map(item => <UserData item={item} id={item._id} key={item._id} />)}
        </div>)

}

export default FooterUser;