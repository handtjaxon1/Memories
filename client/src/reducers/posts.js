// The state is always going to be an array of posts
// We rename the traditional "state" param to "posts" because of that ^

export default (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return posts;
        case "CREATE":
            return posts;
        default:
            return posts;
    }
}