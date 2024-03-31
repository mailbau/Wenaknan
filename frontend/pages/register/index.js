import * as React from "react";

function Button({ children, className }) {
    return (
        <button className={`justify-center items-center px-16 py-5 text-base font-medium text-white bg-red-800 rounded-xl shadow-lg ${className}`}>
            {children}
        </button>
    );
}

function InputField({ label, placeholder }) {
    return (
        <>
            <div className="mt-5 text-base text-black max-md:max-w-full">{label}</div>
            <div className="justify-center items-start px-6 py-6 mt-5 text-sm font-light bg-white rounded-lg border border-blue-500 border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                {placeholder}
            </div>
        </>
    );
}

const registerPage = () => {
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
                                        <span>No Account ?</span>
                                        <br />
                                        <a href="#" className="text-red-800">
                                            Sign up
                                        </a>
                                    </div>
                                </div>
                                <h2 className="mt-4 text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                                    Register
                                </h2>
                                <form>
                                    <InputField
                                        label="Enter your username or email address"
                                        placeholder="Username or email address"
                                    />
                                    <InputField
                                        label="Enter your username or email address"
                                        placeholder="Username or email address"
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
                                            className="w-full bg-transparent focus:outline-none"
                                        />
                                    </div>
                                    <Button className="self-end mt-28 w-[236px] max-md:mt-10">Sign in</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default registerPage;