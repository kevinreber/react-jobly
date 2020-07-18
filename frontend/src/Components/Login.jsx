import React, { useState } from 'react';
import Alert from './Alert';
import JoblyApi from '../JoblyApi';

function Login(){

    /** Initial State for Form */
    const INITIAL_FORM_DATA = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: ""
    }

    const [ formData, setFormData ] = useState(INITIAL_FORM_DATA);
    const [ errors, setErrors ] = useState([]);
    const [ activeView, setActiveView ] = useState('login');
    let loginActive = activeView === 'login';

    /** Toggles which tab of form is active */
    function toggleView(view){
        setActiveView(view);
    }

    function toggleLoginView(){
        toggleView('login');
    }

    function toggleSignupView(){
        toggleView('signup');
    }
    /** *********************************** */

    /** Handle's form changes */
    function handleChange(e){
        /** get 'name' and 'value' of 'e.target' */
        const { name, value } = e.target;
        /** Update 'formData' */
        setFormData( fData => ({
            ...fData, [name]: value
        }));
    }

    /** Handle submitting form data */
    async function handleSubmit(e){
        e.preventDefault();
        let token;
        try{
            token = await JoblyApi.register(formData);
        } catch (errors) {
            /** if registering new user returns errors, 
             * append to 'errors' state */
            setErrors(err => [...err, errors]);
        }

        /** Store token into localStorage */
    }

    /** Sign Up Fields */
    const signupFields = (
        <div>
        <div className="form-group">
            <label>First name</label>
            <input
                name="first_name"
                className="form-control"
                value={formData.first_name}
                onChange={handleChange}
            />
    </div>
    <div className="form-group">
            <label>Last name</label>
            <input
                name="last_name"
                className="form-control"
                value={formData.last_name}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
            />
        </div>
        </div>
    )

    /** Login Form */
    const LoginForm = (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Username</label>
            <input
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label>Password</label>
            <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
            />
            </div>
            {/* If user selects 'Sign Up', append 'signupFields' to form */}
            {loginActive ? "" : signupFields}
            {/* Display any errors */}
            {errors.length > 0 ? 
                <Alert type="danger" messages={errors} />
             : null}

            <button
                type="submit"
                className="btn btn-primary float-right"
            >
            Submit
            </button>
        </form>
    )


    return(
        <div className="Login">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <div className="d-flex justify-content-end">
                    <div className="btn-group">
                    <button
                        className={`btn btn-primary ${loginActive ? "active" : ""} `}
                        onClick={toggleLoginView}
                    >
                        Login
                    </button>
                    <button
                        className={`btn btn-primary ${loginActive ? "" : "active"} `}
                        onClick={toggleSignupView}
                    >
                        Sign up
                    </button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    {LoginForm}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;