import React from 'react';
// import { Link } from 'react-router-dom';
import Welcome from '../components/Welcome';
import LoginForm from '../components/LoginForm';



const Login = () => {


    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <Welcome/>
                </div>
                <div className="col">
                    <div>
                        <h2>Sign-In</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}

                                />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-primary" type="submit">Sign-In</button>
                            </div>
                        </form>
                        <img src="./stickynotelarge - Copy.png" alt="sticky note image" width="500px" height="500px" />
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