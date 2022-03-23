import { FavoriteBorder } from "@mui/icons-material";

export const LikePost = (props) => {
  return (
    <div className="element">
    {console.log("LikePost:", props)}
      <button onClick={() => props.likePost(props.postId)}>
        <FavoriteBorder className="heart" fontSize="small" />
      </button>
    </div>
  );
};
