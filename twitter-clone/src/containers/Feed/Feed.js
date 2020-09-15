import React, {useState, useEffect} from "react";
import TweetBox from "./TweetBox/TweetBox";
import Post from './Post/Post'
import "./Feed.css";
import db from '../../firebase'
import FlipMove from 'react-flip-move';

function Feed() {

  const [posts, setPosts] = useState([])
  
  useEffect(()=> {
    db.collection('posts').onSnapshot(snapshon =>{
      setPosts(snapshon.docs.map(doc =>doc.data()))
    })
  },[])
 
  const userposts = posts.map(post=>(
    <Post 
      key={post.text}
      displayName={post.displayName}
      username={post.username} 
      varified ={post.varified}
      text={post.text}
      avatar={post.avatar}
      image={post.image}
      />
  ))
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      {/* tweetbox */}
      <TweetBox />

      {/* posts */}
      <FlipMove>
      {userposts}
      </FlipMove>
      
      
    </div>
  );
}

export default Feed;
