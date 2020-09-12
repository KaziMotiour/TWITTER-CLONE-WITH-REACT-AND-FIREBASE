import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="TweetBox">
      <form>
        <div>
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGv0oGQhWGxAA/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=qM3Z6XV7ERz9b1k7ndX630g5Ldbs49wx3OCktjq6_eU" />
          <textarea
            className="textarea"
            placeholder="What's happening ?"
          ></textarea>
        </div>
        <input
          className="tweetBox-imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <div>
          <Button
            variant="contained"
            className="TweetBox--Button"
            color="primary"
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
