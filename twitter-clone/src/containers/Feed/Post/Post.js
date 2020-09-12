import { Avatar } from "@material-ui/core";
import  VerifiedUserIcon  from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublicIcon from '@material-ui/icons/Public';
import RepeatIcon from '@material-ui/icons/Repeat';
import React from "react";
import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGv0oGQhWGxAA/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=qM3Z6XV7ERz9b1k7ndX630g5Ldbs49wx3OCktjq6_eU" />
      </div>
      <div className="post_body">
          <div className="post_header">
              <div className="post__headerText ">
                  <h3>Kazi Motiour
                        <VerifiedUserIcon className="post_badge" /><span className="post_username">@motiour</span>

                  </h3 >

              </div>
              <div className="post__headerDescription">
                  <p>yoooooooooooooooooooooooooooooooo </p>

              </div>
              <img src="https://media.tenor.co/images/2477daff28ddd890e6d86cb0d737998e/tenor.gif?riffsid=TkRreE16YzNORjk1Ync9PTB6hVthXSZneAlE7vBSItlygRpt3YgbzkiNluPf-MRXedGXxNP-8wE9Yl7PDlCX" />
              
          </div>

          <div className="post_footer">
              <ChatBubbleOutlineIcon fontSize="samll"/>
              <RepeatIcon fontSize="samll"/>
              <FavoriteBorderIcon fontSize="samll"/>
              <PublicIcon fontSize="samll"/>
          </div>

      </div>
    </div>
  );
}

export default Post;
