import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/base/Layout";
import PrivateRoute from "../components/private/privateRoute";
import Profile from "../components/private/profile";
import Login from "../components/private/login";
import Signup from "../components/private/signup";
import AccountVerify from "../components/private/AccountVerify";
import Alert from "../components/utils/Alert";
const App = () => (
  <>
    <div className="alert fixed bottom-0 right-0 mr-4 mb-6 ">
      <Alert />
    </div>
    <Layout>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/login" />
        <Signup path="/app/signup" />
        <AccountVerify path="/app/account-verify/:authID" />
      </Router>
    </Layout>
  </>
);

export default App;
