import { LIKES } from "./apiEndpoints";

export const fetchLikedPosts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_LIKES" });
    fetch(`${LIKES}`, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "FETCH_LIKED_POSTS", likedPosts: data.liked_posts })
      );
  };
};


export const likePost = (postId) => {
  return (dispatch) => {
    fetch(`${LIKES}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
      body: JSON.stringify({post_id: postId}),
    })
      .then((response) => response.json())
      // .then((data) => alert(data.message));
      .then((data) => console.log("likePost:", data));
  };
};
