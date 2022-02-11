import * as api from "../API/index";
import { useNavigate } from "react-router";

export const signin = (registerData, navigate) => async (dispatch) => {
  const navigate = useNavigate();
  try {
    const { data } = await api.signin(FormData);
    dispatch({ type: "AUTH", data });
    navigate("/", { replace: true });
  } catch {
    console.log("error");
  }
};

export const signup = (registerData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(registerData);
    dispatch({ type: "AUTH", data });
    navigate("/", { replace: true });
  } catch {
    console.log("errowwwr");
  }
};
