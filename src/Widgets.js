import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {  TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed';


function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1488447916851154950"} />
        
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="noor_alam78"
        options={{height: 400}}
        />
        

      </div>
    </div>
  );
}

export default Widgets; 