import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">
                        Firebase Authentication
                    </h1>
                    <p className="py-6">
                        Should Try Firebase Authentication System With ReactJS
                        Project
                    </p>
                    <Link to="/register">
                        <button className="btn btn-primary">
                            Let's Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
