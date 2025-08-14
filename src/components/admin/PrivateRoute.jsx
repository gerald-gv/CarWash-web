import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Cargando...</div>;

  if (!user || user.role.name !== "Admin") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute