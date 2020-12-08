import { useState } from "react";

export default function useCreateAlert() {
  const [errorData, setErrorData] = useState({
    show: false,
    msg: "",
    className: "hidden",
  });
  const setAlert = ({ msg = "test alert", addColor = "red" }) => {
    setErrorData({
      ...errorData,
      show: true,
      msg,
      className: `bg-${addColor}-100 border-${addColor}-400 text-${addColor}-700 `,
    });
  };
  if (errorData.show) {
    setTimeout(() => {
      setErrorData({
        ...errorData,
        show: false,
        className: "hidden",
      });
    }, 2000);
  }

  return [errorData, setAlert];
}
