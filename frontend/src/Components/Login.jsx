import React, { useState } from 'react';

function Login(){

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

    /** Sign Up Fields */
    const signupFields = (
         <div>
         <div className="form-group">
              <label>First name</label>
              <input
              name="first_name"
              className="form-control"
              // value={this.state.first_name}
              // onChange={this.handleChange}
              />
        </div>
        <div className="form-group">
             <label>Last name</label>
             <input
             name="last_name"
             className="form-control"
             // value={this.state.last_name}
             // onChange={this.handleChange}
             />
         </div>
         <div className="form-group">
             <label>Email</label>
             <input
             type="email"
             name="email"
              className="form-control"
             // value={this.state.email}
              // onChange={this.handleChange}
              />
         </div>
         </div>
    )

    /** Login Form */
    const LoginForm = (
        <form>
        {/* <form onSubmit={handleSubmit}> */}
            <div className="form-group">
            <label>Username</label>
            <input
                name="username"
                className="form-control"
                // value={state.username}
                // onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label>Password</label>
            <input
                type="password"
                name="password"
                className="form-control"
                // value={state.password}
                // onChange={handleChange}
            />
            </div>
            {/* If user selects 'Sign Up', append 'signupFields' to form */}
            {loginActive ? "" : signupFields}
            {/* {state.errors.length ? ( */}
            {/* <Alert type="danger" messages={state.errors} /> */}
            {/* ) : null} */}

            <button
            type="submit"
            className="btn btn-primary float-right"
            //   onSubmit={handleSubmit}
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