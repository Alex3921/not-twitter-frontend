const userReducer = (state = { isSignedIn: false, user: null }, action) => {
  switch (action.type) {
    case "LOADING":
      return {...state};

    case "SIGNIN_SUCCESSFUL":
      return { isSignedIn: true, user: action.userData };

    case "SIGN_OUT":
      return { isSignedIn: false, user: null };

    default:
      return state;
  }
};

export default userReducer;
