import React from "react";
import { Avatar, Button } from "@mui/material";
import {
  Verified,
  Repeat,
  FavoriteBorder,
  Publish,
  ChatBubbleOutline,
} from "@mui/icons-material";
import "./Post.css";

function Post({
  avatar,
  displayName,
  username,
  timestamp,
  replyingTo,
  content,
  replies,
  retweets,
  likes,
  verified,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.newt/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <span className="post__authorName">Alexandru Boncut </span>
            <span>
              <Verified className="post__badge" />
            </span>
            <span className="post__username">@alexbonc</span>
          </div>
        </div>
        <div className="post__content">
          <p>I challenge you to build a Twitter Clone</p>
        </div>
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
