// import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySucess = (message: string) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
      width: "286px",
      height: " 69px",
      background: "#343b41",
      fontFamily: "Arial",
      color: "#f8f9fa",
    },
  });

export const notifyError = (message: string) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      width: "286px",
      height: " 69px",
      background: "#343b41",
      fontFamily: "Arial",
      color: "#f8f9fa",
    },
  });
