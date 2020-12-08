import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto layout">
        <main className="main py-8 px-4">{children}</main>
      </div>
      <footer className="footer bg-gray-300">
        <div className="container mx-auto p-4">
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
