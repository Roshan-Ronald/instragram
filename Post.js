import React, { useState } from "react";
import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
} from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

function PostItem({ username, profileImageUrl, imageUrl }) {
  const [liked, setLiked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleImageLike = () => {
    if (!liked) {
      setLiked(true);
      triggerHeartAnimation();
    }
  };

  const handleHeartClick = () => {
    if (!liked) {
      setLiked(true);
      triggerHeartAnimation();
    } else {
      setLiked(false);
    }
  };

  const triggerHeartAnimation = () => {
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 800);
  };

  return (
    <div className="pb-6 border-b w-full sm:max-w-4xl mx-auto bg-white relative">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src={profileImageUrl}
            alt={`${username} profile`}
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm font-semibold truncate max-w-xs sm:max-w-none">
            {username}
          </p>
        </div>
        <span className="text-xl cursor-pointer select-none">⋮</span>
      </div>

      {/* Post Image */}
      <div className="relative cursor-pointer" onClick={handleImageLike}>
        <img
          src={imageUrl}
          alt="post"
          className="w-full h-64 sm:h-96 object-cover select-none"
          draggable={false}
        />
        {showHeart && (
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <AiFillHeart
              size={120}
              className="text-[#d81b60] opacity-80 animate-ping"
            />
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between p-3 text-lg sm:text-xl">
        <div className="flex space-x-4">
          <button
            onClick={handleHeartClick}
            aria-label="Like button"
            className="focus:outline-none"
          >
            {liked ? (
              <AiFillHeart
                size={24}
                className="text-[#d81b60] cursor-pointer transition-colors duration-200"
              />
            ) : (
              <FiHeart
                size={24}
                className="cursor-pointer text-gray-700 hover:text-red-600 transition-colors duration-200"
              />
            )}
          </button>

          <FiMessageCircle
            className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
            size={24}
          />
          <FiSend
            className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
            size={24}
          />
        </div>
        <FiBookmark
          className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
          size={24}
        />
      </div>

      {/* Post Content */}
      <div className="px-3 text-sm">
        <p>
          Liked by <strong>{username}</strong> and <strong>67,324 others</strong>
        </p>
        <p className="mt-1">
          <strong>{username}</strong> Enjoying the view{" "}
          <span className="text-blue-500">#nature</span>,{" "}
          <span className="text-blue-500">#sunset</span>,{" "}
          <span className="text-blue-500">#travel</span>
        </p>
        <p className="text-gray-400 mt-1 cursor-pointer">View all 40 comments</p>
        <p className="text-gray-400 text-xs mt-1">1 hour ago</p>
      </div>

      {/* Comment Input */}
      <div className="px-3 pt-2">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent outline-none text-sm placeholder-gray-500"
        />
      </div>
    </div>
  );
}

export default function Post() {
  return (
    <div>
      <PostItem
        username="_mark_official_"
        profileImageUrl="https://randomuser.me/api/portraits/men/32.jpg"
        imageUrl="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
      />
      <PostItem
        username="nature_lover"
        profileImageUrl="https://randomuser.me/api/portraits/women/44.jpg"
        imageUrl="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
      />
    </div>
  );
}
