import * as api from "../API/index";
// import { useNavigate } from "react-router";

export const signin = (registerData, router) => async (dispatch) => {
  // const navigate = useNavigate();
  try {
    const { data } = await api.signin(registerData);
    dispatch({ type: "AUTH", data  });
    router.push('/');
    // navigate("/", { replace: true });
  } catch {
    console.log("error");
  }
};

export const signup = (registerData, router) => async (dispatch) => {
  try {
    const { data } = await api.signup(registerData);
    dispatch({ type: "AUTH", data });
    router.push('/');
    // navigate("/", { replace: true });
  } catch {
    console.log("errowwwr");
  }
};
