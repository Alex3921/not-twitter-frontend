// write and export your action creator function here
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "ADD_POSTS", posts: data }));
  };
};
