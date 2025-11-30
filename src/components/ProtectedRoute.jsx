import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
