const bookmarksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return [...state, ...action.savedPost];

    default:
      return state;
  }
};

export default bookmarksReducer;
