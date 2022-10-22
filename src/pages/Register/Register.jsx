import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaFacebookF, FaGithub, FaGooglePlusG } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthProvider/AuthProvider";
import {
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
} from "firebase/auth";

const Register = () => {
    const [error, setError] = useState("");
    const { createUser, profileUpdate, registerAndLoginWithProvider } =
        useAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // validation
        if (password !== confirmPassword) {
            return setError("Password Not Match!");
        }

        createUser(email, password)
            .then((result) => {
                form.reset();
                handleProfileUpdate(username, photoURL);
                console.log(result.user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleProfileUpdate = (username, photoURL) => {
        const profile = {
            displayName: username,
            photoURL,
        };
        profileUpdate(profile)
            .then(() => {
                toast.success("Profile Updated!");
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    const handleSignUpWithProvider = (event, providerName) => {
        event.preventDefault();
        if (providerName === "google") {
            popupForSignInProvider(googleProvider);
        }
        if (providerName === "github") {
            popupForSignInProvider(githubProvider);
        }
        if (providerName === "facebook") {
            popupForSignInProvider(facebookProvider);
        }
    };

    const popupForSignInProvider = (provider) => {
        registerAndLoginWithProvider(provider)
            .then((result) => {
                console.log(result);
                navigate("/");
            })
            .catch((error) => {});
    };

    return (
        <div className="w-2/5 m-auto mt-8 pb-20">
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
                {error && <p className="text-red-600 text-2xl">{error}</p>}
                <p className="text-lg mt-2">
                    Already You have a Account{" "}
                    <Link className="text-primary" to="/login">
                        Login
                    </Link>
                </p>
                <div className="space-y-2 mt-3">
                    <button
                        onClick={(e) => handleSignUpWithProvider(e, "google")}
                        className="btn btn-outline btn-primary btn-block text-white"
                    >
                        <FaGooglePlusG className="text-lg mr-1" />
                        Register With Google
                    </button>
                    <button
                        onClick={(e) => handleSignUpWithProvider(e, "github")}
                        className="btn btn-outline btn-block btn-primary  text-white"
                    >
                        <FaGithub className="text-lg mr-1"></FaGithub>
                        Register With GitHub
                    </button>
                    <button
                        onClick={(e) => handleSignUpWithProvider(e, "facebook")}
                        className="btn btn-outline btn-block btn-primary  text-white "
                    >
                        <FaFacebookF className="text-lg mr-1" />
                        Register With FaceBook
                    </button>
                </div>
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
