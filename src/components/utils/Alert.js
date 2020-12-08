import React, { useContext } from "react";
import { AlertContext } from "../../context/AlertContext";
export default function Alert() {
  const { state } = useContext(AlertContext);

  return (
    state !== null &&
    state.length > 0 &&
    state.map(({ id, alertType, msg }) => {
      let alertMessage = "";
      if (alertType === "green") {
        alertMessage = `Sucess!`;
      } else if (alertType === "red") {
        alertMessage = `Error!`;
      } else {
        alertMessage = `Unknown!`;
      }
      return (
        <div
          key={id}
          className={`bg-${alertType}-100 border-${alertType}-400 text-${alertType}-700 border  px-4 py-3 rounded mt-6`}
          role="alert"
        >
          <strong className="font-bold">{alertMessage} </strong>
          <span className="block sm:inline">{msg}</span>
        </div>
      );
    })
  );
}
