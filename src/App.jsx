import { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signin from "./pages/signin-signup/Signin";
import SignUp from "./pages/signin-signup/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />

        {/* Private routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
