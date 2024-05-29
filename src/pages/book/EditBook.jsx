import { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import { getSingleBookAction } from "../../features/books/bookAction";
import { useDispatch, useSelector } from "react-redux";

const EditBook = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();

  const { selectedBook } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    //fetch single book
    dispatch(getSingleBookAction(_id));
  }, [dispatch, _id]);

  return (
    <UserLayout pageTitle={"Edit book"}>
      name: {selectedBook.title}
      EditBook
    </UserLayout>
  );
};

export default EditBook;
