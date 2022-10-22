import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };
    return (
        <div className="w-2/5 m-auto mt-8">
            <h2 className="text-center font-medium text-white text-2xl">
                Login Now!
            </h2>
            <form onSubmit={handleSubmit}>
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
                <p className="text-lg mt-2">
                    Do not have account{" "}
                    <Link className="text-primary" to="/register">
                        Register Now
                    </Link>
                </p>
                <div className="w-full text-center mt-5">
                    <button
                        type="submit"
                        className="btn btn-outline btn-primary rounded-sm px-12 text-center"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
