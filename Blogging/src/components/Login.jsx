import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from './index'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState()


    const login = async (data) => {
        console.log("Login data:", data);
        try {
            const session = await authService.login(data)

            console.log('Logged in session:', session)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-blue-100 via-blue-200 to-blue-30 overflow-hidden ">
            <div className="mx-auto w-90 mb-30 max-w-md bg-white rounded-xl p-10 shadow-md border border-gray-300">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

                <form  onSubmit={handleSubmit(login)}className="space-y-4 text-black">
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
                        {...register("password", { required: "Password is required" })}
                        placeholder="Enter your password"
                    />
                    <Button type="submit" className="w-full">
                        Login

                    </Button>
                </form>
                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-500 hover:underline">
                        Register
                  {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                  </Link>
                </p>
            </div>
        </div>
    )
}

export default Login