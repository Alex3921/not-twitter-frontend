import { HOME, POSTS, PROFILE } from "./apiEndpoints";

export const fetchHomePosts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`${HOME}`, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "FETCH_HOME_POSTS", posts: data.homePosts })
      );
  };
};

export const fetchUserPosts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`${PROFILE}`, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "FETCH_USER_POSTS", userPosts: data.userPosts })
      );
  };
};

export const addPost = (post) => {
  return (dispatch) => {
    fetch(`${POSTS}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "ADD_POST", post: data.post }));
  };
};
