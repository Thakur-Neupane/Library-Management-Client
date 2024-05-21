import { ToastContainer } from "react-toastify";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signin from "./pages/signin-signup/Signin";
import SignUp from "./pages/signin-signup/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import BookLanding from "./pages/book/BookLanding";
import BookList from "./pages/book/BookList";
import EditBook from "./pages/book/EditBook";
import AddNewBook from "./pages/book/AddNewBook";
import StudentsList from "./pages/user/StudentsList";
import AllBurrowList from "./pages/burrows/AllBurrowList";
import MyBurrow from "./pages/burrows/MyBurrow";
import UserProfile from "./pages/user/UserProfile";
import AdminList from "./pages/user/AdminList";
import { AuthRoute } from "./components/auth/AuthRoute";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Private routes */}

        {/* Admin Access Only */}
        <Route path="/admin/books" element={<BookList />} />
        <Route path="/admin/books/new" element={<AddNewBook />} />
        <Route path="/admin/edit/_id" element={<EditBook />} />
        <Route path="/admin/students" element={<StudentsList />} />
        <Route path="/admin/all-burrows" element={<AllBurrowList />} />
        <Route path="/admin/admins" element={<AdminList />} />

        {/* Both Admin and students */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-books" element={<MyBurrow />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
