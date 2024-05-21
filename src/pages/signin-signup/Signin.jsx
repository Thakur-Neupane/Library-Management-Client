import { useEffect, useRef } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button, Row, Col, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../../features/user/userAxios";
import { useDispatch, useSelector } from "react-redux";
import { getUserObj } from "../../features/user/userAction";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
    if (!email || !password) {
      return toast.error("Both inputs must be filled");
    }

    const { status, message, tokens } = await loginUser({ email, password });
    toast[status](message);

    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);

    if (status === "success") {
      dispatch(getUserObj);
    }
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "thakur@gmail.com",
      inputRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "***********",
      inputRef: passRef,
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
            <h1>Welcome back 😊</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} />
            ))}

            <div className="d-grid">
              <Button type="submit" className="btn-primary">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default Signin;
