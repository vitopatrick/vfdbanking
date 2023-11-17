import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./app.css";
import "react-toastify/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </>
);
