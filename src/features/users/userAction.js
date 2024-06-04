import { setUser } from "./userSlice";
import { fetchUserInfo, loginUser } from "./userAxios";
import { toast } from "react-toastify";
import { renewAccessJWT } from "../../helpers/axiosHelper";

export const getUserObj = () => async (dispatch) => {
  const { status, user } = await fetchUserInfo();
  console.log(status, user);

  //update store
  dispatch(setUser(user));
};

export const userSignInAction = (obj) => async (dispatch) => {
  const pending = loginUser(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message, tokens } = await pending;
  toast[status](message);
  //store tokens in the sessions
  sessionStorage.setItem("accessJWT", tokens.accessJWT);
  localStorage.setItem("refreshJWT", tokens.refreshJWT);

  if (status === "success") {
    dispatch(getUserObj());
  }
};

// Auto login USer

export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = sessionStorage.getItem("refreshJWT");

  // When access JWT exist
  if (accessJWT) {
    dispatch(getUserObj());
    return;
  }
  // When access JWT donot exist but refresh JWT exist
  if (refreshJWT) {
    const token = await renewAccessJWT();
    token && dispatch(getUserObj());
  }
};
