import React from "react";
import TweetBox from "./TweetBox/TweetBox";
import Post from './Post/Post'
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      {/* tweetbox */}
      <TweetBox />

      {/* posts */}
      <Post />
      <Post />
      <Post />
      <Post />
      
      
    </div>
  );
}

export default Feed;
