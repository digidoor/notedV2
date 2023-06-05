import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const styles = {
signUpBtn: {
    marginTop: '20px',
        color: 'black',
        backgroundColor: '#bbe8d9',
        boxShadow: '2px 2px 0px darkgrey', 
        fontWeight: 'bold',
    },
    signUpTitle: {
        color: 'black',
    },
    signUpForm: {
        paddingTop: '15px',
    },
    
};


export default function SignupForm() {
    
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState },
            });
            console.log(data);

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="col">
            <div>
                <h2 style={styles.signUpTitle}>Sign-Up</h2>
                <form onSubmit={handleFormSubmit} style={styles.signUpForm}>
                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            placeholder="username"
                            name="username"
                            type="username"
                            value={formState.username}
                            onChange={handleChange}

                        />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            placeholder="name@example.com"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}

                        />
                        <label htmlFor="floatingInput">Email address</label>
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
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn" type="submit" style={styles.signUpBtn}>Sign-Up!</button>
                    </div>
                </form>
            </div>
        </div>
    );
}