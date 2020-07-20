import React, { useState, useContext } from 'react';
import UserContext from './UserContext';

function Profile(){

    /** Global 'currentUser' from 'UserContext.Provider' */
    const currentUser = useContext(UserContext);

    const INITIAL_STATE = {
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        email: currentUser.email,
        photo_url: currentUser.photo_url,
        password: ''
    }

    const [ formData, setFormData ] = useState(INITIAL_STATE);

    const handleChange = e => {
        const  { name, value } = e.target;
        setFormData( fData => (
            {...fData, 
                [name]: value
            }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        let data;
        

    }

    return(
        <div className="Profile">
        <h1 className="text-info">Profile</h1>
        <div className="card w-75 m-auto">
            <div className="card-body text-left">
                <form onSubmit={handleSubmit} className="container">
                    <div className="form-group">
                        <label className="text-info">Username</label>
                        <p>{currentUser.username}</p>
                    </div>
                    <div className="form-group">
                        <label className="text-info">First Name</label>
                        <input className="form-control" name="first_name" value={formData.first_name} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="text-info">Last Name</label>
                        <input className="form-control" name="last_name" value={formData.last_name} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="text-info">E-mail</label>
                        <input className="form-control" name="email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="text-info">Photo URL</label>
                        <input className="form-control" name="photo_url" value={formData.photo_url} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="text-info">Re-enter Password</label>
                        <input className="form-control" type="password" name="password" value={formData.password} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-info w-100" type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Profile;