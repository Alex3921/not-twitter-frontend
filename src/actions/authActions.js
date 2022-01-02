import { SIGNIN } from "./apiEndpoints";

export const signinUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch(`${SIGNIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          localStorage.setItem("username", data.user.username);
          localStorage.setItem("jwt", data.jwt);
          dispatch({ type: "SIGNIN_SUCCESSFUL", userData: data.user });
        }
      });
  };
};

// export const signupUser = (user) => {
//   return (dispatch) => {
//     dispatch({ type: "SIGNING_UP" });
//     fetch(`${SIGNUP}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // save the token to localStorage for future access
//         localStorage.setItem("jwt", data.jwt);
//         // save the user somewhere (in state!) to log the user in
//         dispatch({type: "SIGNUP_SUCCESSFUL", userData: data})
//       });
//   };
// };
