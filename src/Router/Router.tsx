import { Routes, Route } from "react-router-dom";
import { Register } from "../Pages/Register/Register";
import { Login } from "../Pages/Login/Login";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
