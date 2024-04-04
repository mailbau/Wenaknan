import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/navbar";

function Sidebar() {
    return (
        <aside className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-between p-5 mx-auto w-full text-base font-medium bg-white max-md:mt-1.5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f780eb915776d2f58837d83297d7bbeb4d21d79f2566df37b9ecf5149c9fb608?apiKey=305c73f4223b4ac38d39c7426bc6beac&" className="w-8 aspect-square" />
                <nav>
                    <ul>
                        <li className="flex flex-col justify-center mt-7 w-full text-black bg-blue-50 rounded">
                            <a href="#" className="flex gap-4 justify-center p-3 rounded">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f67e20f8ed706df9bd2123772d041d159805de413006cada0672d7c0b354843?apiKey=305c73f4223b4ac38d39c7426bc6beac&"
                                    className="shrink-0 w-5 aspect-square"
                                />
                                <span className="flex-1">For You</span>
                            </a>
                        </li>
                        <li className="flex gap-4 justify-center p-3 mt-3 whitespace-nowrap rounded text-slate-700">
                            <a href="#">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/50f24084cfe6d6b1e49a4192617a5da4e690e78dc76cc90a27d771e61a3391d8?apiKey=305c73f4223b4ac38d39c7426bc6beac&"
                                    className="shrink-0 w-5 aspect-square"
                                />
                                <span className="flex-1">Favorites</span>
                            </a>
                        </li>
                        <li className="flex gap-4 justify-center p-3 mt-3 whitespace-nowrap rounded text-slate-700">
                            <a href="#">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6841897b1fb55d7c372c56bd32ae591c848448c77ef6772754d5ff47abbe6552?apiKey=305c73f4223b4ac38d39c7426bc6beac&"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9eda886d2cbc9125234421aa6211e9948d4d76264ca8bb663b84c94cd34c784?apiKey=305c73f4223b4ac38d39c7426bc6beac&"
                        className="shrink-0 w-10 aspect-square"
                    />
                    <div className="flex flex-col flex-1 my-auto">
                        <div className="leading-[133%] text-slate-700">Michael Smith</div>
                        <div className="mt-1 leading-[117%] text-slate-500">
                            michaelsmith12@gmail.com
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 justify-center p-3 mt-3 whitespace-nowrap rounded text-slate-700">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1aa43326a3065b6afde4bf226eb206d1409d37b00c1bd60be0d9866bc8bdee23?apiKey=305c73f4223b4ac38d39c7426bc6beac&"
                        className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-1">Logout</div>
                </div>
            </div>
        </aside>
    );
}

function RestaurantCard({ restaurant }) {
    const { restaurant_name, restaurant_description, restaurant_rating, restaurant_photo_path } = restaurant;

    return (
        <article className="flex flex-col p-2.5 bg-white max-md:max-w-full">
            <h2 className="text-4xl font-extrabold max-md:max-w-full">{restaurant_name}</h2>
            <img
                loading="lazy"
                src={restaurant.image}
                className="mt-5 w-full aspect-[2.22] max-md:max-w-full"
                alt={restaurant_name}
            />
            <div className="flex gap-5 justify-between pr-16 mt-5 w-full text-2xl font-semibold whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a4012a880eb223bbda6c1df04bdbb31866262293cb48742b9b34c569de7448b?apiKey=305c73f4223b4ac38d39c7426bc6beac&"
                    className="shrink-0 border-4 border-black border-solid aspect-[1.15] stroke-[4px] stroke-black w-[30px]"
                    alt=""
                />
                <div className="flex gap-1">
                    <div>{restaurant_rating}</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf5ffe02ccf89f7b453b50d47e9a970369789f8b19854f32ca1db774e97f9f4f?apiKey=305c73f4223b4ac38d39c7426bc6beac&"
                        className="shrink-0 border border-black border-solid aspect-[1.04] fill-yellow-400 stroke-[1px] stroke-black w-[27px]"
                        alt="star"
                    />
                </div>
            </div>
            <p className="mt-5 text-lg font-medium max-md:max-w-full">
                {restaurant_description}
            </p>
        </article>
    );
}

const STORAGE_URL = 'http://localhost:8080';

function Main() {
    const [restaurants, setRestaurants] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch('http://localhost:8080/restaurant?page=1&pageSize=10');
            const data = await response.json();
            console.log('Raw restaurant data:', data); // Logging raw data received
            const restaurantsWithAbsoluteImagePaths = data.map((restaurant) => {
                const imagePath = `${STORAGE_URL}/${restaurant.restaurant_photo_path.replace(/\\/g, '/')}`;
                console.log('Image path for restaurant:', restaurant.name, imagePath); // Logging image paths for each restaurant
                return {
                    ...restaurant,
                    image: imagePath
                };
            });
            setRestaurants(restaurantsWithAbsoluteImagePaths);
        } catch (error) {
            console.error('Error fetching restaurants', error);
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
                    {restaurants.map((restaurant, index) => (
                        <RestaurantCard key={index} restaurant={restaurant} />
                    ))}
                </div>
                {loading && <p>Loading...</p>}
            </div>
        </main>
    );
}

function MyComponent() {
    return (
        <div className="flex flex-col justify-center bg-white">
            <Navbar />
            <div className="flex flex-col w-full bg-white max-md:max-w-full">

                <div className="mt-1.5 w-full max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <Sidebar />
                        <Main />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;