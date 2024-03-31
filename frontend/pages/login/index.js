import * as React from "react";

const loginPage = () => {
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
                                    className="mt-32 w-full aspect-[1.02] max-md:mt-10 max-md:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-11 pt-12 pb-20 mt-4 w-full bg-white bg-opacity-80 rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                <div className="max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-black max-md:mt-10">
                                                <div className="text-xl">Welcome </div>
                                                <div className="mt-8 text-6xl font-medium max-md:text-4xl">
                                                    Sign in
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                                            <div className="text-sm text-red-800 max-md:mt-10">
                                                <span className="">No Account ?</span>
                                                <br />
                                                <span className="text-red-800">Sign up</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-28 text-base text-black max-md:mt-10 max-md:max-w-full">
                                    Enter your username or email address
                                </div>
                                <div className="justify-center items-start px-6 py-6 mt-5 text-sm font-light bg-white rounded-lg border border-blue-500 border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                                    <input
                                        type="username"
                                        placeholder="Username or Email"
                                        name="username"
                                        className="w-full bg-transparent outline-none"
                                    />
                                </div>
                                <div className="mt-12 text-base text-black max-md:mt-10 max-md:max-w-full">
                                    Enter your Password
                                </div>
                                <div className="justify-center items-start px-6 py-6 mt-5 text-sm font-light whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-400 text-zinc-500 max-md:px-5 max-md:max-w-full">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        className="w-full bg-transparent outline-none"
                                    />
                                </div>
                                <div className="self-end mt-11 text-sm text-blue-500 max-md:mt-10 max-md:mr-2.5">
                                    Forgot Password
                                </div>
                                <div className="justify-center items-center self-end px-16 py-5 mt-12 max-w-full text-base font-medium text-white bg-red-800 rounded-xl shadow-lg w-[236px] max-md:px-5 max-md:mt-10">
                                    Sign in
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default loginPage;