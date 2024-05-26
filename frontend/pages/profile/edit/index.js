import * as React from "react";
import { useState, useEffect } from "react";
import { decode } from 'jwt-js-decode';
import { useRouter } from 'next/router';
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

function MainSection({ userInfo }) {
    return (
        <main className="flex flex-col items-center w-full py-8">
            <div className="flex flex-col md:flex-row gap-5 w-full max-w-screen-lg px-5">
                <div className="flex flex-col w-full md:w-[28%] max-md:ml-0">
                    <img
                        loading="lazy"
                        alt="Profile"
                        src={userInfo.profileImage || "https://cdn.builder.io/api/v1/image/assets/TEMP/40f8d2232269fb1d70cc1884649dc95792ad238adfbf6dc3979f3ecaea100c10?apiKey=7a756a63a9f44e489954adfab0cbb893&"}
                        className="object-cover overflow-hidden grow justify-center items-end px-16 pt-20 mr-auto aspect-[1.04] object-[top_left] w-[167px] max-md:mt-2 max-sm:mx-auto max-sm:w-full max-sm:max-w-[196px]"
                    />
                </div>
                <div className="flex flex-col ml-0 md:ml-5 w-full md:w-[72%]">
                    <h1 className="justify-center self-stretch px-5 my-auto text-5xl leading-4 text-slate-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                        {userInfo.name || "User Name"}
                    </h1>
                </div>
            </div>
        </main>
    );
}

function FormSection() {
    const [newUsername, setNewUsername] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can perform any action with the new username and email
        console.log("Submitted new username:", newUsername);
        console.log("Submitted new email:", newEmail);

        router.push('/profile');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col self-center pt-2.5 pb-20 mt-8 w-full max-w-lg bg-white bg-opacity-80 rounded-[40px]">
            <div className="flex flex-col px-11 mx-auto mt-5 mb-2.5 w-full text-base text-black grow-0 min-h-[200px] max-md:px-5 max-md:max-w-full">
                <label htmlFor="newUsername" className="mr-auto max-md:max-w-full">
                    New username
                </label>
                <input
                    id="newUsername"
                    aria-label="Type your new username"
                    placeholder="Type your new username"
                    className="justify-center items-start px-6 py-6 mt-6 text-sm font-light bg-white rounded-lg border border-blue-500 border-solid text-zinc-500 max-md:px-5 max-md:max-w-full"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <label htmlFor="newEmail" className="mt-5 max-md:max-w-full">
                    New Email
                </label>
                <input
                    id="newEmail"
                    aria-label="Type your new email"
                    placeholder="Type your new email"
                    type="email"
                    className="justify-center items-start px-6 py-6 mt-6 text-sm font-light bg-white rounded-lg border border-blue-500 border-solid text-zinc-500 max-md:px-5 max-md:max-w-full"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="box-border relative shrink-0 self-center py-4 pr-6 pl-6 mt-5 w-auto text-center bg-red-700 rounded appearance-none cursor-pointer text-white"
                tabIndex="0"
            >
                Submit
            </button>
        </form>
    );
}

function MyComponent() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = decode(token);
            setUserInfo({
                name: decodedToken.payload.name,
                email: decodedToken.payload.email,
                profileImage: decodedToken.payload.profileImage
            });
        } else {
            console.error('No token found');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar userInfo={userInfo} onLogout={handleLogout} />
                <div className="flex flex-col flex-1 items-center">
                    <MainSection userInfo={userInfo} />
                    <FormSection />
                </div>
            </div>
        </div>
    );
}

export default MyComponent;