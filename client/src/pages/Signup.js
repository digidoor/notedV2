import React from 'react';
import Welcome from '../components/Welcome';
import SignupForm from '../components/SignupForm';

const Signup = () => {

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <Welcome/>
                </div>
                <div className="col">
                    <SignupForm/>
                </div>
            </div>
            <a href='/login'>
                <h3>Login</h3>
            </a>
        </div>
    );
};

export default Signup;
