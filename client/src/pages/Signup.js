import React from "react";

export default function Signup() {
    
    return (
        <>
        <div class="container text-center">
        <div class="row">
            <div class="col">
                <h2>Welcome!</h2>
                <p>
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                    this is where the website blurb will go.
                </p>
            </div>
            <div class="col">
                <div>
                    <h2>Sign-Up</h2>
                    <div class="form-floating mb-3">
                        <input type="username" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Username</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <img src="./stickynotelarge - Copy.png" alt="sticky note image" width="500px" height="500px"/>
                </div>
            </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button">Sign-Up</button>
        </div>
        <a>
            <h3>Sign-In!</h3>
        </a>
        </div>
        </>
    )
}