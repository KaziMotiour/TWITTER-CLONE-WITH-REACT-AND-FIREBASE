import { Avatar, Button } from "@material-ui/core";
import React,{useState, useEffect} from "react";
import db from '../../../firebase'
import "./TweetBox.css";

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage]=useState('')

  function sendTweet(e){
    e.preventDefault()
    db.collection('posts').add({

      displayName:'kazi motiour',
      username:'matiour',
      varified:true,
      text:tweetMessage,
      avatar:'https://media-exp1.licdn.com/dms/image/C4D03AQGv0oGQhWGxAA/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=qM3Z6XV7ERz9b1k7ndX630g5Ldbs49wx3OCktjq6_eU',
      image:tweetImage


    })
    setTweetImage('')
    setTweetMessage('')
    
  }
  

  return (
    <div className="TweetBox">
      <form>
        <div>
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGv0oGQhWGxAA/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=qM3Z6XV7ERz9b1k7ndX630g5Ldbs49wx3OCktjq6_eU" />
          <textarea
            className="textarea"
            placeholder="What's happening ?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          ></textarea>
        </div>
        <input
          className="tweetBox-imageInput"
          placeholder="Enter image URL"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <div>
          <Button
            type="submit"
            variant="contained"
            className="TweetBox--Button"
            color="primary"
            onClick={sendTweet}
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
