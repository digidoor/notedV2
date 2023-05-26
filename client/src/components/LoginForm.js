import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


export default function LoginForm() {
    
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
    
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    
    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });
    
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    
        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
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
                      value={(formState.password)}
                      onChange={handleChange}
                    />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="submit">Sign-In</button>
                </div>
            </form>
        </div>
    )
}