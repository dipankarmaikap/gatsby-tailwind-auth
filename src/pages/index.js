import React from "react";
import { Link } from "gatsby";

import Layout from "../components/base/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Hello World!</h1>
      <p>
        You should <Link to="/app/login">log in</Link> to see restricted content
      </p>
    </Layout>
  );
}
