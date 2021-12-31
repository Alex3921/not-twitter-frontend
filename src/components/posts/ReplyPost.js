import React from "react";
import { ChatBubbleOutline } from "@mui/icons-material";

export const ReplyPost = () => {
  return (
    <div className="element">
      <button>
        <ChatBubbleOutline className="chat" fontSize="small" />
      </button>
    </div>
  );
};
