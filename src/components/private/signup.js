import React, { useState, useContext } from "react";
import axios from "axios";
import { navigate } from "gatsby";
import { AuthContext } from "../../context/AuthContext";
import { AlertContextDispatch } from "../../context/AlertContext";
import { backendUrl } from "../../helpers/helper";
import { setAlert } from "../../actions/AlertAction";
export default function Signup() {
  const { state } = useContext(AuthContext);
  const { dispatch } = useContext(AlertContextDispatch);
  const initialState = {
    name: "",
    email: "",
    password: "",
    passwordTwo: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, passwordTwo } = formData;
  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { name, email, password };
      const res = await axios.post(`${backendUrl}/signup`, data);
      setAlert(res.data, "green", dispatch);
      setFormData(initialState);
    } catch (error) {
      if (error.response.data === "User already exists please login") {
        setFormData(initialState);
        setAlert(error.response.data, "purple", dispatch);
        navigate(`/app/login`);
      } else {
        setAlert(error.response.data, "red", dispatch);
      }
    }
  };
  if (state.isAuthenticated) {
    navigate(`/app/profile`);
  }
  return (
    <>
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">User Registration</h1>
        <form method="post" onSubmit={(event) => onSubmit(event)}>
          <div className="username flex flex-col mb-4">
            <label htmlFor="username" className="mb-2">
              Name
            </label>
            <input
              type="text"
              aria-label="name"
              className="px-4 py-2 border border-gray-700 bg-gray-100"
              name="name"
              value={name}
              onChange={(event) => onChange(event)}
            />
          </div>
          <div className="email flex flex-col mb-4">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              aria-label="email"
              className="px-4 py-2 border border-gray-700 bg-gray-100"
              name="email"
              value={email}
              onChange={(event) => onChange(event)}
            />
          </div>
          <div className="password flex flex-col mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="px-4 py-2 border border-gray-700 bg-gray-100"
              aria-label="password"
              value={password}
              onChange={(event) => onChange(event)}
            />
          </div>
          <div className="passwordTwo flex flex-col mb-4">
            <label htmlFor="passwordTwo" className="mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="passwordTwo"
              className="px-4 py-2 border border-gray-700 bg-gray-100"
              aria-label="passwordTwo"
              value={passwordTwo}
              onChange={(event) => onChange(event)}
            />
          </div>
          <input
            type="submit"
            aria-label="submit"
            className="bg-purple-700 text-white px-8 py-2 hover:bg-gray-700 cursor-pointer"
            value="Log In"
          />
        </form>
      </div>
    </>
  );
}
