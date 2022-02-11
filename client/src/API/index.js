import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5001" });

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signin = (registerData) => API.post("/users/signin", registerData);
export const signup = (registerData) => API.post("/users/signup", registerData);
