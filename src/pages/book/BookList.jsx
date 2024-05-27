import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { IoIosAddCircle } from "react-icons/io";
import { BookTable } from "../../components/tables/BookTable";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BookList = () => {
  return (
    <UserLayout pageTitle={"Book List"}>
      {/* Button here */}
      <div className="text-end mb-5">
        <Link to="/admin/books/new">
          {""}
          <Button variant="primary">
            <IoIosAddCircle /> Add New Book
          </Button>
        </Link>
      </div>

      {/* table here */}

      <BookTable />
    </UserLayout>
  );
};

export default BookList;
