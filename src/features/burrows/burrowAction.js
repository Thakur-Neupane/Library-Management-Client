import { getAllBooksAction, getSingleBookAction } from "../books/bookAction";
import { fetchBurrows, postNewBurrow } from "./burrowAxios";
import { toast } from "react-toastify";
import { setburrows } from "./burrowSlice";

export const addNewBurrowAction = (obj) => async (dispatch) => {
  const pending = postNewBurrow(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status) {
    //fetch the seleted book

    dispatch(getAllBooksAction());
  }
};

export const fetchBurrowsAction= ()=> async dispatch

const (status, burrows)= await fetchBurrows()
if (status==="success"){
  dispatch(setburrows(burrows))
}
