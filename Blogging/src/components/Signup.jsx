import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from './index';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Added Link import

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState();

    const create = async (data) => {
        setError("");

        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) dispatch(authLogin(currentUser));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-blue-100 via-blue-200 to-blue-30 overflow-hidden ">
            <div className="mx-auto w-90 max-w-md bg-white rounded-xl p-10 shadow-md border border-gray-300  mb-25">
                <h2  className="text-2xl font-bold text-center mb-4">Sign Up</h2>

                <form onSubmit={handleSubmit(create)} className="space-y-5">
                    <Input
                        label="Full Name"
                        type="text"
                        placeholder="Enter your full name"
                        {...register("name", { required: "Full name is required" })}
                    />
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            validate: {
                                matchPattern: (value) =>
                                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                                    "Email address must be a valid address"
                            }
                        })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: "Password is required" })}
                    />
                    <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-md">
                        Sign Up
                    </Button>
                </form>

                <p className="text-center mt-4 text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>

                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </div>
        </div>
    );
}

export default Signup;
