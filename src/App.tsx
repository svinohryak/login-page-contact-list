import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/login-page-contact-list/" element={<HomePage />} />
      <Route path="/login-page-contact-list/login" element={<LoginPage />} />
      <Route
        path="/login-page-contact-list/register"
        element={<RegisterPage />}
      />
    </Routes>
  );
}

export default App;
