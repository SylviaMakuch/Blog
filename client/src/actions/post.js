import * as api from "../API/index";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log(data);

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


//this mean we are importing from actions- as api and be able to use the fetchPosts from the axios file//
//Action Creators, function returning actions, payload= stored data//
// when working with async fx, we can use R.thunk, allowing us to specify an additional arrow fx which we will use async
//now we have access to dispatch w/async//
//catching all the data from API, data reps the post

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

