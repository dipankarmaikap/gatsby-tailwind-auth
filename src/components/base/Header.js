import React, { useContext } from "react";
import { Link, navigate } from "gatsby";
import { AuthContext, AuthContextDispatch } from "../../context/AuthContext";
import { logout } from "../../actions/AuthAction";
export default function NavBar() {
  const { state } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContextDispatch);

  let greetingMessage = "";
  if (state.isAuthenticated) {
    greetingMessage = `Hello User`;
  } else {
    greetingMessage = "You are not logged in";
  }

  return (
    <div className="bg-purple-700">
      <div className="container mx-auto p-4 md:flex justify-between text-white items-center">
        <span className="text-3xl font-bold">{greetingMessage}</span>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/app/profile">Profile</Link>
          <Link to="/app/signup">Signup</Link>
          <Link to="/app/login">Login</Link>
          {state.isAuthenticated ? (
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                logout(dispatch);
                navigate(`/app/login`);
              }}
            >
              Logout
            </a>
          ) : null}
        </nav>
      </div>
    </div>
  );
}
