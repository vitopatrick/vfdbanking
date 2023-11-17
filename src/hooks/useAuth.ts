import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const Navigate = useNavigate();

  if (!localStorage.getItem("token")) Navigate("/login");

  return;
};
