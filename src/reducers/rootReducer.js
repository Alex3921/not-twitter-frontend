import { combineReducers } from 'redux';
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import likesReducer from "./likesReducer";

const rootReducer = combineReducers({  
  posts: postsReducer,
  user: usersReducer,
  likedPosts: likesReducer
});

export default rootReducer;