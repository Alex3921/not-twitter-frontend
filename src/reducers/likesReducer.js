const likesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_LIKE":
      return [...state, ...action.likedPost];

    default:
      return state;
  }
};

export default likesReducer;
