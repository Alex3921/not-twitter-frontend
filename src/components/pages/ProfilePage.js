import React from "react";
import PostsContainer from "../containers/PostsContainer";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FmdGoodIconOutlined from "@mui/icons-material/FmdGoodOutlined";

import "../feed/Feed.css";

function ProfilePage() {
  const user = JSON.parse(localStorage.user);
  const joined = new Date(user.created_at);
  const year = joined.getFullYear();
  const month = joined.toLocaleString("default", { month: "long" });

  return (
    <div className="feed profile">
      <div className="feed__header">
        <h2>{user.name}</h2>
        <h4>{"@" + user.username}</h4>
        <div className="date__location">
          <span className="location">
            <FmdGoodIconOutlined fontSize="small" />
            <span>{user.location}</span>
          </span>
          <span className="dateJoined">
            <DateRangeIcon fontSize="small" />
            <span>{"Joined " + month + " " + year}</span>
          </span>
        </div>
      </div>

      <PostsContainer />
    </div>
  );
}

export default ProfilePage;
