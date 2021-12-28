import React from "react";
import { ReplyPost } from "./ReplyPost";
import { SharePost } from "./SharePost";
import { LikePost } from "./LikePost";
import { BookmarkPost } from "./BookmarkPost";
import { Avatar } from "@mui/material";
import { Verified } from "@mui/icons-material";

// Button - from mui/material

function Post({post}) {
  // debugger
  return (
    <>
    {console.log(post)}
      <div className="post__avatar">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.newt/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <span className="post__authorName">{post.author.name}</span>
            <span>
              <Verified className="post__badge" />
            </span>
            <span className="post__username">{"@" + post.author.username}</span>
          </div>
        </div>
        <div className="post__content">
          <p>{post.content}</p>
        </div>
        <div className="post__footer">
          <ReplyPost />
          <SharePost />
          <LikePost />
          <BookmarkPost />
        </div>
      </div>
    </>
  );
}

export default Post;
