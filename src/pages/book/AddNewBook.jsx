import React, { useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { Form } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { inputFields } from "../../assets/formInputs";

const initialState = {};
const AddNewBook = () => {
  const { form, handleOnChange, handleOnSubmit } = useForm();

  return (
    <UserLayout pageTitle={"New Book"}>
      <div>
        <Link to="/admin/books">
          <Button variant="secondary">&lt; Back</Button>
        </Link>
      </div>

      <div>
        <h4 className="py-4">Fill up the form to add new book</h4>
        <hr />

        <Form onSubmit={handleOnSubmit}>
          {inputFields.map((input, i) => (
            <CustomInput key={i} {...input} onChange={handleOnChange} />
          ))}
          <div className="d-grid">
            <Button type="submit">Submit New Book </Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default AddNewBook;
