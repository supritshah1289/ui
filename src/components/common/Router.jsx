import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../LoginPage";
import Contact from "../Contact";
import App from "../../App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
