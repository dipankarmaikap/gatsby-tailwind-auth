import React, { useState, useContext } from "react";
import { navigate } from "gatsby";
import { AuthContext, AuthContextDispatch } from "../../context/AuthContext";
import { login } from "../../actions/AuthAction";
export default function Login() {
  const { state } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContextDispatch);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(dispatch);

  if (state.isAuthenticated) {
    navigate(`/app/profile`);
  }
  return (
    <>
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Log in</h1>
        <form
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            login(username, password, dispatch);
            navigate(`/app/profile`);
          }}
        >
          <div className="username flex flex-col mb-4">
            <label htmlFor="username" className="mb-2">
              Username
            </label>
            <input
              type="text"
              aria-label="username"
              className="px-4 py-2 border border-gray-700 bg-gray-100"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
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
