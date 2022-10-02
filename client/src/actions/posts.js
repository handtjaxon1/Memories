import * as api from "../api";

// Action Creators - functions that'll return actions
// they are arrow functions that return an action, which is an object
// that has a "type", which is the type of the action, and a "payload",
// which is the data of the action

export const getPosts = () => async (dispatch) => {
    try {
        // destructure the data returned from the api call to fetch all posts
        const { data } = await api.fetchPosts();
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}