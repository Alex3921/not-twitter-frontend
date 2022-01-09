const userReducer = (state = { isSignedIn: false, user: null }, action) => {
  switch (action.type) {
    case "LOADING":
      console.log("Loading:" + state);
      return {...state};

    case "SIGNIN_SUCCESSFUL":
      console.log("Success:" + state);

      return { isSignedIn: true, user: action.userData };

    case "SIGN_OUT":
      return { isSignedIn: false, user: null };

    default:
      return state;
  }
};

export default userReducer;
