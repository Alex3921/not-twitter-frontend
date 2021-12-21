const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "LOADING_POSTS":
      return [...state];

    case "ADD_POSTS":
      return [...state,...action.posts]

    default:
      return state;
  }
};

export default postsReducer;
