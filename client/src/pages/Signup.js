import React from 'react';
import Welcome from '../components/Welcome';
import SignupForm from '../components/SignupForm';

const styles = {
    // login here anchor
    loginAnch: {
        marginTop: '15px',
    },
    signUpContainer: {
        marginTop: '30px',
    }
}

const Signup = () => {

    return (
        <div className="container text-center" style={styles.signUpContainer}>
            <div className="row">
                <div className="col">
                    <Welcome />
                </div>
                <div className="col">
                    <SignupForm />
                </div>
            </div>
            <a href='/login'>
                <h3 style={styles.loginAnch}>Login Here</h3>
            </a>
        </div>
    );
};

export default Signup;
