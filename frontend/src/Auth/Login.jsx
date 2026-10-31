
import axios from 'axios';
import React, { useState } from 'react';

const API ="http://localhost:8080/api/login";

const Login = () => {

    const [form, setForm] = useState({
        identifier: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            console.log("login details are submitting",form);
            await axios.post(API,form)
            setIsError(false)
            setMessage("Login Success")
            setForm({identifier:"", password:""})
        }
        catch(err){
            setIsError(true)
            setMessage(err.response?.data ||
             "Cannot reach the server. Is the backend running?"
            );
        }
        };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 px-4 py-10">

            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl sm:p-10">

                {/* Logo */}
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white shadow-md">
                    CR
                </div>

                {/* Heading */}
                <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                    Welcome Back
                </h1>

                <p className="mt-3 mb-8 text-center text-sm leading-6 text-gray-500">
                    Sign in to continue learning with CodeReturners.
                </p>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label
                            htmlFor="identifier"
                            className="mb-2 block text-sm font-semibold text-gray-700"
                        >
                            Email or Phone Number
                        </label>

                        <input
                            id="identifier"
                            type="text"
                            name="identifier"
                            placeholder="Enter your email or phone"
                            value={form.identifier}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-semibold text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 active:translate-y-0"
                    >
                        Sign In
                    </button>

                </form>

        {/* Success / Error Message */}
        {message && (
          <div
            role="status"
            className={`mt-5 rounded-lg border p-3 text-center text-sm ${
              isError
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-green-200 bg-green-50 text-green-700"
            }`}
          >
            {typeof message === "string"
              ? message
              : JSON.stringify(message)}
          </div>
        )}
                

                {/* Footer */}
                <p className="mt-7 text-center text-xs text-gray-400">
                    Your learning journey starts here.
                </p>

            </div>

        </div>
    );
};

export default Login;
