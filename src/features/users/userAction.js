import { setUser } from "./userSlice";
import { fetchUserInfo } from "./userAxios";
import { loginUser } from "./userAxios";
import { toast } from "react-toastify";

export const getUserObj = () => async (dispatch) => {
  const { status, user } = await fetchUserInfo();
  console.log({ status });
  dispatch(setUser(user));

  //update store
};

export const userSignInAction = (obj) => async (dispatch) => {
  const pending = loginUser(obj);
  toast.promise(pending, {
    pending: "please wait .......",
  });
  const { status, message, tokens } = await pending;
  toast[status](message);
  //store tokens in the sessions
  sessionStorage.setItem("accessJWT", tokens.accessJWT);
  localStorage.setItem("refreshJWT", tokens.refreshJWT);

  if (status === "success") {
    const { status, user } = await fetchUserInfo();
    console.log({ status, user });
    dispatch(getUserObj());
  }
};
