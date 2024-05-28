import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { getAllBooks } from "../../features/books/bookAction";

const isPrivate = true;
export const BookTable = () => {
  useEffect(() => {
    dispatchEvent(getAllBooks(isPrivate));
  }, [dispatch]);

  const { books } = useSelector((state) => state.bookInfo);
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>30 Books found!</div>

        <div>
          <input type="text" className="form-control" />
        </div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" width={"70px"} />
              </td>
              <td>{item.title}</td>
              <div>
                <td>{item.author}</td>
              </div>
              <div>
                <td>{item.status}</td>
              </div>
              <Link to={"/admin/book/edit+item.id"}>
                <Button variant="warning">Edit</Button>
              </Link>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
