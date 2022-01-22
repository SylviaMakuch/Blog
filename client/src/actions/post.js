import * as api from "../api"; //this mean we are importing from actions- as api and be able to use the fetchPosts from the axios file//
api.fetchPosts;

const getPosts = () => async (dispatch) => {
  const action = { type: "FETCH_ALL", payload: [] };
  dispatch(action);
};
//Action Creators, function returning actions, payload= stored data//
// when working with async fx, we can use R.thunk, allowing us to specify an additional arrow fx