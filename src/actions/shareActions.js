import { RETWEETS} from "./apiEndpoints"

export const sharePost = (postId) => {
  return (dispatch) => {
    fetch(`${RETWEETS}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwt}`,
      },
      body: JSON.stringify({post_id: postId}),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message));
  };
};