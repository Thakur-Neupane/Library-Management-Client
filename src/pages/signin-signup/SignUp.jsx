import React, { useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Row, Col, Form, Button } from "react-bootstrap";
import { CustomInput } from "../../customInpute/CustomInput";
import { toast } from "react-toastify";
import { postNewUser } from "../../features/user/userAxios";

const SignUp = () => {
  const [form, setForm] = useState({});

  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    // setError("");

    // if (name === "confirmPassword") {
    //   form.password !== value && setError("Password should match");
    //   form.password.length < 6 && setError("Password must be 6 characters");
    //   !/[!@#$%^&*(_)]/.test(form.password) &&
    //     setError("Must include atleast one of !@#$%^&*()_");
    //   !/[a-z]/.test(form.password) && setError("Must have atleast 1 lowercase");
    //   !/[A-Z]/.test(form.password) && setError("Must have atleast 1 uppercase");
    //   !/[0-9]/.test(form.password) && setError("Must have atleast 1 Number");
    // }
    // if (name === "password" && form.confirmPassword) {
    //   form.confirmPassword !== value && setError("Password doesn't match");
    // }

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("password don't match");
    }

    const responsePending = postNewUser(rest);
    toast.promise(responsePending, {
      pending: "Please wait ...........",
    });
    const { status, message } = await responsePending;
    toast[status](message);
  };
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Thakur",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Neupane",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      required: false,
      placeholder: "0412345678",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "thakur@gmail.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "***********",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "Password Should match",
    },
  ];
  return (
    <DefaultLayout>
      <Row>
        <Col>
          <Form
            onSubmit={handleOnSubmit}
            className="shadow-lg border p-5 rounded m-auto mt-4"
            style={{
              width: "450px",
            }}
          >
            <h1>Join the Library Management</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} onChange={handleOnChange} />
            ))}

            {error && (
              <div className="my-3">
                <ul>
                  <li className="text-danger fw-bolder">{error}</li>
                </ul>
              </div>
            )}

            <div className="d-grid">
              <Button disabled={error} type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default SignUp;
