import { Repeat } from "@mui/icons-material";

export const SharePost = (props) => {
  return (
    <div className="element">
      <button onClick={() => props.sharePost(props.postId)}>
        <Repeat className="share" fontSize="small" />
      </button>
    </div>
  );
};