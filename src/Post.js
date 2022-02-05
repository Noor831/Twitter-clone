import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
function Post( {
    displayName,
    username,
    verified,
    timetamp,
    text,
    image,
    avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
      <Avatar src="https://pbs.twimg.com/media/FDXzK89VEAUZXj6?format=jpg&name=medium"/>
      </div>
      <div className="post__body">
      <div className="post__header">
          <div className="post__headerText">
              <h3>@Noor123</h3>
          </div>
     <div className="post__headerDescription">
         <p>Enjoying vada pav #Pune</p>
     </div>
      </div>
      <img src ="https://pbs.twimg.com/media/FKzpuEIaAAEQW8s?format=jpg&name=small" alt=""/>
      <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
    );

  }

export default Post;
