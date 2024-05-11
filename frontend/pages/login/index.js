import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

function Button({ children, className }) {
    return (
        <button type="submit" className={`justify-center items-center px-16 py-5 text-base font-medium text-white bg-red-800 rounded-xl shadow-lg ${className}`}>
            {children}
        </button>
    );
}

function InputField({ label, placeholder, value, onChange, type }) {
    return (
        <>
            <div className="mt-5 text-base text-black max-md:max-w-full">{label}</div>
            <div className="justify-center items-start px-6 py-6 mt-5 text-sm font-light bg-white rounded-lg border border-blue-500 border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent focus:outline-none"
                />
            </div>
        </>
    );
}

function LoginPage() {

    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/user/login", {
                usernameOrEmail,
                password,
            });

            setSuccessMessage("Login successful");
            setErrorMessage("");

            // Clear the form
            setUsernameOrEmail("");
            setPassword("");
            setIsLoggedIn(true);

            console.log("Login successful", response.data);

            // Redirect to the main page
            router.push("/main");
        } catch (error) {
            setSuccessMessage("");
            setErrorMessage("Invalid credentials");
            setIsLoggedIn(false);
            console.error("Error logging in user", error);
        }
    };

    return (
        <div className="flex flex-col justify-center bg-white">
            <div className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
                <div className="px-20 py-20 w-full bg-red-800 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    src="/assets/logo.png"
                                    alt="Logo"
                                    className="max-w-full aspect-[4.55] w-[273px]"
                                />
                                <img
                                    loading="lazy"
                                    src="/assets/food.png"
                                    alt="Decorative image"
                                    className="mt-32 w-full aspect-[1.02] max-md:mt-10 max-md:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-11 pt-12 pb-20 mt-4 w-full bg-white bg-opacity-80 rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                <div className="max-md:max-w-full">
                                    <div className="flex gap-5 justify-between max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                                        <h1 className="self-start text-xl text-black">Welcome</h1>
                                        <div className="text-sm text-red-800">
                                            <span>No Account ?</span>
                                            <br />
                                            <a href="/register" className="text-red-800">Sign up</a>
                                        </div>
                                    </div>
                                    <h2 className="mt-4 text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                                        Sign in
                                    </h2>
                                    {successMessage && <p className="text-green-600">{successMessage}</p>}
                                    <form onSubmit={handleSubmit}>
                                        <InputField
                                            type="text"
                                            label="Enter your username or email address"
                                            placeholder="Username or email address"
                                            value={usernameOrEmail}
                                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                                        />
                                        <InputField
                                            type="password"
                                            label="Enter your Password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div className="self-end mt-11 text-sm text-blue-500 max-md:mt-10 max-md:mr-2.5">
                                            Forgot Password
                                        </div>
                                        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                                        {isLoggedIn ? (
                                            <Link href="/main">
                                                <Button className="justify-center items-center self-end px-16 py-5 mt-12 max-w-full text-base font-medium text-white bg-red-800 rounded-xl shadow-lg w-[236px] max-md:px-5 max-md:mt-10">Sign in</Button>
                                            </Link>
                                        ) : (
                                            <Button type="submit" className="justify-center items-center self-end px-16 py-5 mt-12 max-w-full text-base font-medium text-white bg-red-800 rounded-xl shadow-lg w-[236px] max-md:px-5 max-md:mt-10">Sign in</Button>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
