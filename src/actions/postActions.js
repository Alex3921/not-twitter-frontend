const API = "http://localhost:3000/posts";

// write and export your action creator function here
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`${API}`, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_POSTS", posts: data }));
  };
};

export const addPost = (post = {}) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`${API}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "ADD_POST", post: data }));
  };
};