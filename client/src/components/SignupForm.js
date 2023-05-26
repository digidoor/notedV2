import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const styles = {
signUpBtn: {
    marginTop: '20px',
    
}
}


export default function SignupForm() {
    
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error }] = useMutation(ADD_USER);

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
                <h2>Sign-Up</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            id="floatingInput"
                            placeholder="username"
                            name="username"
                            type="username"
                            value={formState.username}
                            onChange={handleChange}

                        />
                        <label for="floatingInput">Username</label>
                    </div>
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
                        <button className="btn btn-primary" type="submit" style={styles.signUpBtn}>Sign-Up!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}