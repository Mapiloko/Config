import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "pages/Landing";
import Login from "pages/Login";
import "./scss/custom.scss";
import Accesscode from "pages/Accesscode";
import ForgotPassword from "components/ForgotPassword";

function App() {
  return (
    <div className="vw-100 vh-100 default-background">
      <Routes>
        <Route path="/" element={<Accesscode />} />
        <Route path="/forgot_passowrd" element={<ForgotPassword />} />
        <Route path="/:otp/:category/:subCat" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
