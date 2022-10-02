import { combineReducers } from "redux";
import posts from "./posts"

// Note that combineReducers takes a key-value pair, but in our since we'd used "posts: posts" then
// we can just use "posts" since the key and value are the same name

export default combineReducers({
    posts,
});