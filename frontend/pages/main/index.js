import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { decode } from 'jwt-js-decode';
import Navbar from "@/components/navbar";
import RestaurantCard from "../../components/restcard";

function Sidebar({ userInfo, onLogout }) {
    return (
        <aside className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-between p-5 mx-auto w-full text-base font-medium bg-white max-md:mt-1.5">
                <img loading="lazy" src="" className="w-8 aspect-square" />
                <nav>
                    <ul>
                        <li className="flex mt-7 w-full text-black bg-blue-50 rounded">
                            <a href="#" className="flex items-center gap-4 p-3 rounded w-full">
                                <img
                                    loading="lazy"
                                    src="/assets/foryou.png"
                                    className="shrink-0 w-5 aspect-square"
                                />
                                <span className="flex-1">For You</span>
                            </a>
                        </li>
                        <li className="flex mt-3 w-full rounded">
                            <a href="favorites" className="flex items-center gap-4 p-3 text-slate-700 rounded w-full">
                                <img
                                    loading="lazy"
                                    src="/assets/favorites.png"
                                    className="shrink-0 w-5 aspect-square"
                                />
                                <span className="flex-1">Favorites</span>
                            </a>
                        </li>
                        <li className="flex mt-3 w-full rounded">
                            <a href="#" className="flex items-center gap-4 p-3 text-slate-700 rounded w-full">
                                <img
                                    loading="lazy"
                                    src="/assets/profile.png"
                                    className="shrink-0 w-5 aspect-square"
                                />
                                <span className="flex-1">Profile</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-2 justify-center p-3 mt-96 text-xs max-md:mt-10">
                    <img
                        loading="lazy"
                        src=""
                        className="shrink-0 w-10 aspect-square"
                    />
                    <div className="flex flex-col flex-1 my-auto">
                        <div className="leading-[133%] text-slate-700">{userInfo.name}</div>
                        <div className="mt-1 leading-[117%] text-slate-500">
                            {userInfo.email}
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 justify-center p-3 mt-3 whitespace-nowrap rounded text-slate-700 cursor-pointer" onClick={onLogout}>
                    <img
                        loading="lazy"
                        src=""
                        className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-1">Logout</div>
                </div>
            </div>
        </aside>
    );
}

const STORAGE_URL = 'http://localhost:8080';

function Main() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchRestaurants = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8080/restaurant/status', {
                params: {
                    user_id: 1 // Replace with the actual active user ID
                }
            });
            const data = response.data;
            const restaurantsWithAbsoluteImagePaths = data.map((restaurant) => {
                const imagePath = `${STORAGE_URL}/${restaurant.restaurant_photo_path.replace(/\\/g, '/')}`;
                return {
                    ...restaurant,
                    image: imagePath
                };
            });

            setRestaurants(restaurantsWithAbsoluteImagePaths);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching restaurants', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (scrollHeight - scrollTop === clientHeight && !loading) {
            fetchRestaurants();
        }
    };

    return (
        <main
            className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full"
            onScroll={handleScroll}
            style={{ overflowY: "scroll", maxHeight: "100vh" }}
        >
            <div className="flex flex-col grow items-center px-16 pt-12 text-black max-md:px-5 max-md:mt-1.5 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[641px]">
                    {restaurants.map((restaurant) => (
                            <RestaurantCard restaurant={restaurant} userId={1}/>
                        ))}
                </div>
                {loading && <p>Loading...</p>}
            </div>
        </main>
    );
}

function MyComponent() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = decode(token);
            console.log('Decoded JWT token:', decodedToken); // Log the contents of the token
            console.log('payload:', decodedToken.payload); // Log the payload (data

            setUserInfo({
                name: decodedToken.payload.name,
                email: decodedToken.payload.email
            });
        } else {
            console.error('No token found');
        }
    }, []);

    useEffect(() => {
        console.log('User info:', userInfo);
    }, [userInfo]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className="flex flex-col justify-center bg-white">
            <Navbar />
            <div className="flex flex-col w-full bg-white max-md:max-w-full">
                <div className="mt-1.5 w-full max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <Sidebar userInfo={userInfo} onLogout={handleLogout} />
                        <Main />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;
