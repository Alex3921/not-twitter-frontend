const API = "http://localhost:3000/users/2";

// write and export your action creator function here
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`${API}/posts`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_POSTS", posts: data }));
  };
};

export const addPost = (post={}) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    fetch(`${API}/posts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "ADD_POST", post: data }));
  };
}

// const addPost = () => {
//   return (dispatch) => {
//     dispatch({ type: "LOADING_POSTS" });
//     fetch(`${API}/posts`)
//       .then((response) => response.json())
//       .then((data) => dispatch({ type: "ADD_POST", posts: data }));
//   };
// };

// // Example POST method implementation:
// async function postData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });
