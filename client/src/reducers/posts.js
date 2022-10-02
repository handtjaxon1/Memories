// The state is always going to be an array of posts
// We rename the traditional "state" param to "posts" because of that ^

export default (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            // the payload data is going to be all of our posts we retrieved from our fetchPosts api call
            return action.payload;
        case "CREATE":
            return posts;
        default:
            return posts;
    }
}