import { BOOKMARKS } from "./apiEndpoints";

export const fetchSavedPosts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`${BOOKMARKS}`, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "FETCH_SAVED_POSTS", savedPosts: data.savedPosts })
      );
  };
};


export const savePost = (postId) => {
  return (dispatch) => {
    fetch(`${BOOKMARKS}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
      body: JSON.stringify({post_id: postId}),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message));
  };
};
