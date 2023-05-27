import React from 'react';
// import { Link } from 'react-router-dom';
import Welcome from '../components/Welcome';
import LoginForm from '../components/LoginForm';

const styles = {
    // content container
    signIn: {
        paddingTop: '25px',
    },
    // signup anchor
    signUpHere: {
        marginTop: '30px',
        color: '#ef7c8e',
        textShadow: '2px 2px 2px black',
    }
}

const Login = () => {


    return (
        <div className="container text-center" style={styles.signIn}>
            <div className="row">
                <div className="col">
                    <Welcome />
                </div>
                <div className="col">
                    <LoginForm />
                </div>
            </div>


            <a href='/signup'>
                <h3 style={styles.signUpHere}>Sign-Up Here!</h3>
            </a>
        </div>

    );
};

export default Login;