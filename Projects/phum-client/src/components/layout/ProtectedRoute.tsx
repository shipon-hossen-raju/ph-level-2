import { ReactNode } from "react";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}
