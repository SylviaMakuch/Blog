export default(posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
// export default reducer
//action.payload= our posts
