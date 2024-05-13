import * as React from "react";
import { useState } from "react";
import HeartButton from "@/components/heartBtn";

function RestaurantCard({ restaurant }) {
    const { restaurant_name, restaurant_description, restaurant_rating, restaurant_photo_path } = restaurant;
    const [isClick, setClick] = useState(false);

    return (
        <div className="flex flex-col p-2.5 bg-white max-md:max-w-full border-b-2 pb-5">
            <h2 className="text-4xl font-extrabold max-md:max-w-full">{restaurant_name}</h2>
            <img
                loading="lazy"
                src={restaurant.image}
                className="mt-5 w-full aspect-[2.22] max-md:max-w-full object-cover"
                alt={restaurant_name}
            />
            <div className="flex gap-5 justify-between pr-8 mt-5 w-full h-10 text-2xl font-semibold whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <HeartButton />
                <div className="flex gap-1">
                    <div>{restaurant_rating}</div>
                    <img
                        loading="lazy"
                        src="/assets/star.png"
                        className="flex h-4/5 aspect-square"
                        alt="star"
                    />
                </div>
            </div>
            <div className="space-y-3">
                <p className="mt-5 text-lg font-medium max-md:max-w-full">
                    {restaurant_description}
                </p>
                <p>
                    Category: Chicken
                </p>
            </div>

        </div>
    );
}

export default RestaurantCard;