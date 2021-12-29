import {LIKES} from "./actionEndpoints"

export const fetchLikedPosts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_LIKES" });
    fetch(`${LIKES}`, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_LIKED_POSTS", likedPosts: data }));
  };
};