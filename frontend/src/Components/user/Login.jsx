import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '../general/Alert';
import UserContext from '../UserContext';

function Login({ signup, login }){

    /** Use history to redirect after user logs in/signs up */
    const history = useHistory();

    /** Initial State for Form */
    const INITIAL_FORM_DATA = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: ""
    }

    const [ formData, setFormData ] = useState(INITIAL_FORM_DATA);
    const [ errors, setErrors ] = useState('');
    const [ activeView, setActiveView ] = useState('login');
    let loginActive = activeView === 'login';

    /** Global 'currentUser' from 'UserContext.Provider' */
    const { currentUser }= useContext(UserContext);

    /** If user is logged in, redirect to '/jobs' page */
    if (currentUser){
        history.push('/jobs');
    }

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
        // Clear any past errors
        setErrors('');

        /** Format data based on if user is signing up or logging in 
         *  and store response
        */
        let data;
        let resp;

        if (activeView === 'signup'){    
            data = {
                username: formData.username,
                password: formData.password,
                first_name: formData.first_name || undefined,
                last_name: formData.last_name || undefined,
                email: formData.email || undefined
            };

            resp = await signup(data)
        } else {
            data = {
                username: formData.username,
                password: formData.password
            };

            resp = await login(data);
        }

        /** Direct user to '/companies' after successful sign in */ 
        if(resp.success){
            history.push('/companies'); 
        } else {
            /** if registering new user returns errors, 
             * append to 'errors' state */
            setErrors(resp.errors);
        }   
    }


    /** Sign Up Fields */
    const signupFields = (
        <div>
        <div className="form-group">
            <label className="float-left">First name</label>
            <input
                name="first_name"
                className="form-control"
                value={formData.first_name}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label className="float-left">Last name</label>
            <input
                name="last_name"
                className="form-control"
                value={formData.last_name}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label className="float-left">Email</label>
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
            <label className="float-left">Username</label>
            <input
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label className="float-left">Password</label>
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
                className="btn btn-info float-right"
            >
            Submit
            </button>
        </form>
    )

    return(
        <div className="Login pt-5 text-info">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <div className="d-flex justify-content-end">
                    <div className="btn-group">
                    <button
                        className={`btn btn-info ${loginActive ? "active" : ""} `}
                        onClick={toggleLoginView}
                    >
                        Login
                    </button>
                    <button
                        className={`btn btn-info ${loginActive ? "" : "active"} `}
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