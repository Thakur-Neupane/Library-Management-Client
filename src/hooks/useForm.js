import { useState } from "react";
import { toast } from "react-toastify";

const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
};

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  return {
    form,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};

export default useForm;
