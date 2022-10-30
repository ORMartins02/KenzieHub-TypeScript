import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const ProtectedRoutes = () => {
  const { userData, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <h3>Carregando...</h3>
      </>
    );
  }

  return userData ? <Outlet /> : <Navigate to="/" replace />;
};
