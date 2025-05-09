import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const{user}=use(AuthContext)
    console.log(user)
    return (
        <div className='w-11/12 mx-auto'>
              <Helmet>
                <title>Event_Zone || Profile</title>
            </Helmet>
            <h2 className='text-bold font-2xl text-center mt-4 mb-4'>My profile</h2>
            <div>
                <h2>UserName:{user.displayName}</h2>
                <h2>UserName:{user.email}</h2>
            </div>
        </div>
    );
};

export default Profile;