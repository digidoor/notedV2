import React from 'react';
// import { Link } from 'react-router-dom';
import Welcome from '../components/Welcome';
import LoginForm from '../components/LoginForm';

const styles = {
signIn: {
paddingTop: '25px',
}
}

const Login = () => {


    return (
        <div className="container text-center" style={styles.signIn}>
            <div className="row">
                <div className="col">
                    <Welcome/>
                </div>
                <div className="col">
                    <LoginForm/>
                </div>
            </div>

            
            <a href='/signup'>
                <h3>Sign-Up!</h3>
            </a>
        </div>
               
     );
}; 

export default Login;