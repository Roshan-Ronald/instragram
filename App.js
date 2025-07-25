import React from "react";
import Navbar from "./components/Navbar";
import StoryBar from "./components/StoryBar";
import Post from "./components/Post";
import BottomTabBar from "./components/BottomTabBar";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto">
        <StoryBar />
        <Post />
        <BottomTabBar />
      </div>
    </div>
  );
}
