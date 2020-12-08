import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Profile = () => {
  const { state } = useContext(AuthContext);
  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {state.user.name}</li>
        <li>E-mail: {state.user.email}</li>
      </ul>
    </>
  );
};

export default Profile;
