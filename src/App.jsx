import { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<Home />} />

        {/* Private routes */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
