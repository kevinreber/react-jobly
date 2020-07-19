import React, { useContext } from 'react';
import UserContext from './UserContext';

function Profile(){

    /** Global 'currentUser' from 'UserContext.Provider' */
    const currentUser = useContext(UserContext);

    return(
        <div className="Profile">
            <h1>{currentUser.username}</h1>
            <h3>{currentUser.first_name} {currentUser.last_name}</h3>
            <p>{currentUser.email}</p>
        </div>
    )
}

export default Profile;