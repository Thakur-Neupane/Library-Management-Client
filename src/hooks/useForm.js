import { useState } from "react";
import { toast } from "react-toastify";

const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
};

const handleOnSubmit = ({ e, form }) => {
  e.preventDefault();
  toast.success("TODO");
  console.log(form);
};
const useForm = (initialState) => {
  const [form, setForm] = useState({ initialState });

  return {
    form,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
    handleOnSubmit: (e) => handleOnSubmit({ e, form }),
  };
};
export default useForm;
