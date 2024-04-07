import * as React from "react";
import { useState } from "react";
import axios from "axios";

function Button({ children, className }) {
    return (
        <button type="submit" className={`justify-center items-center px-16 py-5 text-base font-medium text-white bg-red-800 rounded-xl shadow-lg ${className}`}>
            {children}
        </button>
    );
}

function InputField({ label, placeholder, value, onChange, errorMessage }) {
    return (
        <>
            <div className="mt-5 text-base text-black max-md:max-w-full">{label}</div>
            <div className="justify-center items-start px-6 py-6 mt-5 text-sm font-light bg-white rounded-lg border border-blue-500 border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent focus:outline-none"
                />
            </div>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </>
    );
}

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        if (!validateEmail(emailValue)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted")

        if (emailError) {
            setErrorMessage("Please enter a valid email address");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/user/add", {
                name,
                user_name: userName,
                user_email: email,
                user_password: password,
            });

            setSuccessMessage("User registered successfully");
            setErrorMessage("");

            // Clear the form
            setName("");
            setUserName("");
            setEmail("");
            setPassword("");

            console.log(response.data);
        }
        catch (error) {
            setSuccessMessage("");
            setErrorMessage("Error registering user");
            console.error('Error registering user', error);
        }
    };
    return (
        <div className="flex flex-col justify-center bg-white">
            <div className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
                <section className="px-20 py-20 w-full bg-red-800 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    src="/assets/logo.png"
                                    alt="Decorative image"
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
                                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                                    <h1 className="self-start text-xl text-black">Welcome</h1>
                                    <div className="text-sm text-red-800">
                                        <span>Already have an account ?</span>
                                        <br />
                                        <a href="/login" className="text-red-800">
                                            Sign in
                                        </a>
                                    </div>
                                </div>
                                <h2 className="mt-4 text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                                    Register
                                </h2>
                                {successMessage && <p className="text-green-600">{successMessage}</p>}
                                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                                <form onSubmit={handleSubmit}>
                                    <InputField
                                        label="Enter your name"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <InputField
                                        label="Enter your username"
                                        placeholder="Username"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                    <InputField
                                        label="Enter your email address"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={handleEmailChange}
                                        errorMessage={emailError}
                                    />
                                    <div className="mt-5 text-base text-black max-md:max-w-full">
                                        Enter your Password
                                    </div>
                                    <div className="justify-center items-start px-6 py-6 mt-5 text-sm font-light whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-400 text-zinc-500 max-md:px-5 max-md:max-w-full">
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full bg-transparent focus:outline-none"
                                        />
                                    </div>
                                    <Button className="self-end mt-28 w-[236px] max-md:mt-10">Register</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default RegisterPage;