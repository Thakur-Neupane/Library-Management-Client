import { toast } from "react-toastify";
import { postNewBook } from "./bookAxios";

export const postNewBookAction = (obj) => async (disptch) => {
  // call axios to send data

  const pending = postNewBook(obj);
  toast.promise(pending, {
    pending: "Please wait ...",
    success: pending.message,
  });

  const { status, message } = await pending;
  toast[status](message);
  console.log(status, message);
  // then call function to fetch all the data
};
