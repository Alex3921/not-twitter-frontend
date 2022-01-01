const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "LOADING_POSTS":
      return [];

    case "FETCH_HOME_POSTS":
      return [...action.posts];

    case "FETCH_SAVED_POSTS":
      return [...action.savedPosts];

    case "FETCH_LIKED_POSTS":
      return [...action.likedPosts];

    case "FETCH_USER_POSTS":
      return [...action.userPosts];

    case "ADD_POST":
      return [action.post,...state];

    default:
      return state;
  }
};

export default postsReducer;
