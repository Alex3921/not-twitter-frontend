import { Publish } from "@mui/icons-material";

export const BookmarkPost = (props) => {
  return (
    <div className="element">
      <button onClick={() => props.savePost(props.postId)}>
        <Publish className="save" fontSize="small" />
      </button>
    </div>
  );
};