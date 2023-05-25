import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const Signup = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

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

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div class="col">
            <div>
                <h2>Sign-Up</h2>
                <form onSubmit={handleFormSubmit}>
                    <div class="form-floating mb-3">
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
                    <div class="form-floating">
                        <input
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                            type="password"
                        />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="button">Sign-Up</button>
                    </div>
                </form>
                <img src="./stickynotelarge - Copy.png" alt="sticky note image" width="500px" height="500px" />
            </div>
        </div>

    );
};           

export default Signup;
