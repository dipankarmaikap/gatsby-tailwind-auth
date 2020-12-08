import React, { useContext } from "react";
import axios from "axios";
import { navigate } from "gatsby";
import { AuthContext } from "../../context/AuthContext";
import { AlertContextDispatch } from "../../context/AlertContext";
import { backendUrl } from "../../helpers/helper";
import { setAlert } from "../../actions/AlertAction";
export default function AccountVerify({ authID }) {
  const { state } = useContext(AuthContext);
  const { dispatch } = useContext(AlertContextDispatch);
  const activateMyAccount = async () => {
    try {
      const res = await axios.post(`${backendUrl}/activate-account`, {
        token: authID,
      });
      setAlert("You can login now.", "green", dispatch);
      navigate(`/app/login`);
      console.log(res);
    } catch (error) {
      if (error.response.data === "User already exists please login") {
        setAlert(error.response.data, "red", dispatch);
        navigate(`/app/login`);
      } else {
        setAlert("Invalid link. Please create a new account", "red", dispatch);
        navigate(`/app/signup`);
      }
    }
  };
  if (state.isAuthenticated) {
    navigate(`/app/profile`);
  }
  return (
    <div>
      <h1>Hello</h1>
      <p>{authID}</p>
      <button
        className="bg-purple-600 px-8 py-2"
        type="button"
        onClick={activateMyAccount}
      >
        Activate my account
      </button>
    </div>
  );
}
