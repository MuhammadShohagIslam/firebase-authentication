import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(username, photoURL, email, password, confirmPassword);
    };

    return (
        <div className="w-2/5 m-auto mt-8">
            <h2 className="text-center font-medium text-white text-2xl">
                Register Now!
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-white">
                            Username
                        </span>
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Your Name"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-white">
                            Photo URL
                        </span>
                    </label>
                    <input
                        type="text"
                        name="photoURL"
                        placeholder="Enter Your PhotoURL"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-white">
                            Email
                        </span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-white">
                            Password
                        </span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Your Name"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-white">
                            Confirm Password
                        </span>
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter Your Confirm Password"
                        className="input input-bordered"
                    />
                </div>
                <p className="text-lg mt-2">
                    Already You have a Account{" "}
                    <Link className="text-primary" to="/login">
                        Login
                    </Link>
                </p>
                <div className="w-full text-center mt-5">
                    <button
                        type="submit"
                        className="btn btn-outline btn-primary rounded-sm px-12 text-center"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
