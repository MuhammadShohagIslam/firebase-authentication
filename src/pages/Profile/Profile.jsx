import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
    const [error, setError] = useState("");
    const { user, profileUpdate, emailUpdate,verifyEmail, passwordUpdate, setLoading } =
        useAuth();

    // update user
    const handleUpdateUserSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const photoURL = form.photoURL.value;

        const profile = {
            displayName: username,
            photoURL: photoURL,
        };

        profileUpdate(profile)
            .then((result) => {
                form.reset();
                toast.success("Profile Updated!");
            })
            .catch((error) => {
                toast.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // update email
    const handleUpdateEmailSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const newEmail = form.email.value;

        emailUpdate(newEmail)
            .then(() => {
                toast.success(
                    "Sended Change Email Verify Like on in your Email. Verify Your Email!"
                );
                handleVerifyEmail()
            })
            .catch((error) => {
                toast.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const handleVerifyEmail = () => {
        verifyEmail().then(() => {
            toast.success(
                "Sended Verify Like on in your Email. Verify Your Email!"
            );
        });
    };


    // update password
    const handleUpdatePasswordSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // validation
        if (password !== confirmPassword) {
            return setError("Password Not Match!");
        }
        passwordUpdate(password)
            .then((result) => {
                form.reset();
                toast.success("Password Updated!");
            })
            .catch((error) => {
                toast.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <div className="w-2/5 m-auto mt-8 pb-20">
            <h2 className="text-center font-medium text-white text-2xl mb-2">
                Register Now!
            </h2>
            <form onSubmit={handleUpdateUserSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-white">
                            Username
                        </span>
                    </label>
                    <input
                        type="text"
                        name="username"
                        defaultValue={user?.displayName}
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
                        defaultValue={user?.photoURL}
                        placeholder="Enter Your PhotoURL"
                        className="input input-bordered"
                    />
                </div>

                <div className="w-full text-center mt-5">
                    <button
                        type="submit"
                        className="btn btn-outline btn-primary rounded-sm px-12 text-center"
                    >
                        Update User
                    </button>
                </div>
            </form>
            <form onSubmit={handleUpdateEmailSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-white">
                            Email
                        </span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={user ? user.email : ""}
                        placeholder="Enter Your Email"
                        className="input input-bordered"
                    />
                </div>

                <div className="w-full text-center mt-5">
                    <button
                        type="submit"
                        className="btn btn-outline btn-primary rounded-sm px-12 text-center"
                    >
                        Email Update
                    </button>
                </div>
            </form>
            <form onSubmit={handleUpdatePasswordSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-white">
                            New Password
                        </span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Your New Password"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-white">
                            Confirm New Password
                        </span>
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter Your Confirm New Password"
                        className="input input-bordered"
                    />
                </div>
                {error && <p className="text-red-600 text-2xl">{error}</p>}

                <div className="w-full text-center mt-5">
                    <button
                        type="submit"
                        className="btn btn-outline btn-primary rounded-sm px-12 text-center"
                    >
                        Password Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
