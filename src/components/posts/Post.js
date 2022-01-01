import React, { Component} from "react";
import { connect } from "react-redux"
import { ReplyPost } from "./ReplyPost";
import { SharePost } from "./SharePost";
import { LikePost } from "./LikePost";
import { BookmarkPost } from "./BookmarkPost";
import { Avatar } from "@mui/material";
import { Verified } from "@mui/icons-material";

import { savePost } from "../../actions/bookmarkActions"
import { likePost } from "../../actions/likeActions"
import { sharePost } from "../../actions/shareActions"

// Button - from mui/material

export class Post extends Component {
  render() {
  return (
    <>
      <div className="post__avatar">
        <Avatar src="" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <span className="post__authorName">{this.props.post.author.name}</span>
            <span>
              <Verified className="post__badge" />
            </span>
            <span className="post__username">{"@" + this.props.post.author.username}</span>
          </div>
        </div>
        <div className="post__content">
          <p>{this.props.post.content}</p>
        </div>
        <div className="post__footer">
          <ReplyPost />
          <SharePost sharePost={this.props.sharePost} postId={this.props.post.id} />
          <LikePost likePost={this.props.likePost} postId={this.props.post.id} />
          <BookmarkPost savePost={this.props.savePost} postId={this.props.post.id} />
        </div>
      </div>
    </>
  )};
}

const mapDispatchToProps = (dispatch) => {
  return {
    savePost: (postId) => dispatch(savePost(postId)),
    likePost: (postId) => dispatch(likePost(postId)),
    sharePost: (postId) => dispatch(sharePost(postId))
  }
}

export default connect(null, mapDispatchToProps)(Post)