import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGooglePlusG } from "react-icons/fa";
import { useAuth } from "./../../contexts/AuthProvider/AuthProvider";
import {
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
} from "firebase/auth";
import toast from "react-hot-toast";

const Login = () => {
    const { logIn, registerAndLoginWithProvider, setLoading } = useAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then((result) => {
                if (result.user.emailVerified) {
                    form.reset();
                    toast.success("Login Successfully!");
                    navigate(from, { replace: true });
                } else {
                    toast.success("Verify Your Email Address!");
                    navigate("/login");
                }
            })
            .catch((error) => {
                toast.error(error);
            })
            .finally(() => {
                setLoading(false);
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
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error("Something Went Wrong!");
            });
    };

    return (
        <div className="w-2/5 m-auto mt-8">
            <h2 className="text-center font-medium text-white text-2xl">
                Login Now!
            </h2>
            <div className="space-y-2 mt-3">
                <button
                    onClick={(e) => handleSignUpWithProvider(e, "google")}
                    className="btn btn-outline btn-primary btn-block text-white"
                >
                    <FaGooglePlusG className="text-lg mr-1" />
                    Connection With Google
                </button>
                <button
                    onClick={(e) => handleSignUpWithProvider(e, "github")}
                    className="btn btn-outline btn-block btn-primary  text-white"
                >
                    <FaGithub className="text-lg mr-1"></FaGithub>
                    Connection With GitHub
                </button>
                <button
                    onClick={(e) => handleSignUpWithProvider(e, "facebook")}
                    className="btn btn-outline btn-block btn-primary  text-white "
                >
                    <FaFacebookF className="text-lg mr-1" />
                    Connection With FaceBook
                </button>
            </div>
            <h2 className="text-center font-medium text-white text-xl mt-3">
                Or
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
