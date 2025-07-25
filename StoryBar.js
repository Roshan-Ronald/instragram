import React from "react";

const stories = [
  { id: 1, username: "Your Story", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, username: "_username_", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, username: "ig_person", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, username: "ig_man", image: "https://i.pravatar.cc/150?img=4" },
  { id: 5, username: "ig_women", image: "https://i.pravatar.cc/150?img=5" },
  { id: 6, username: "daily_vibes", image: "https://i.pravatar.cc/150?img=6" },
  { id: 7, username: "travel_girl", image: "https://i.pravatar.cc/150?img=7" },
  { id: 8, username: "the_coder", image: "https://i.pravatar.cc/150?img=8" },
  { id: 9, username: "design_boy", image: "https://i.pravatar.cc/150?img=9" },
  { id: 10, username: "memes4you", image: "https://i.pravatar.cc/150?img=10" },
];

export default function StoryBar() {
  return (
    <div className="flex overflow-x-auto space-x-4 p-3 max-w-5xl mx-auto scrollbar-hide max-h-[200px] bg-white rounded-md shadow-sm">
      {stories.map((story) => (
        <div
          key={story.id}
          className="flex flex-col items-center cursor-pointer transform transition-transform duration-200 hover:scale-110 min-w-[60px] sm:min-w-[80px]"
        >
          <div className="rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-[2px] w-12 h-12 sm:w-16 sm:h-16">
            <div className="bg-white rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={story.image}
                alt={story.username}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
              />
            </div>
          </div>
          <p className="text-xs sm:text-base mt-2 font-semibold truncate max-w-[60px] sm:max-w-[100px] text-center text-gray-700">
            {story.username}
          </p>
        </div>
      ))}
    </div>
  );
}
