import React, { useState } from "react";
import {
    FiHome,
    FiSearch,
    FiPlusSquare,
    FiVideo,
} from "react-icons/fi";

export default function BottomTabBar() {
    const [active, setActive] = useState("Home");

    const tabs = [
        { name: "Home", icon: <FiHome size={24} /> },
        { name: "Search", icon: <FiSearch size={24} /> },
        { name: "Post", icon: <FiPlusSquare size={24} /> },
        { name: "Reels", icon: <FiVideo size={24} /> },
        {
            name: "Profile",
            image: "https://i.pravatar.cc/150?img=12",
        },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-t-[20px] flex justify-around items-center h-14 sm:h-16 z-50 max-w-4xl mx-auto">
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    onClick={() => setActive(tab.name)}
                    className={`flex flex-col items-center justify-center cursor-pointer ${active === tab.name ? "text-black" : "text-gray-500 hover:text-black"
                        }`}
                >
                    {tab.icon && tab.icon}
                    {tab.image && (
                        <img
                            src={tab.image}
                            alt="Profile"
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover ${active === tab.name ? "ring-2 ring-black p-0.5" : ""
                                }`}
                        />
                    )}
                </button>
            ))}
        </nav>
    );
}
