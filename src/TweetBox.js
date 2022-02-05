import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
function TweetBox() {
  return (
  <div className="tweetBox">
<form>
    <div className="tweetBox__input">
    <Avatar src = "https://pbs.twimg.com/media/FDXzK89VEAUZXj6?format=jpg&name=medium"/>
    <input placeholder="Whats happening?" type = "text"/>
    </div>
    <Button type="submit" className="tweetBox__tweetButton">
        Tweet</Button>
</form>
  </div>
  );
}

export default TweetBox;
