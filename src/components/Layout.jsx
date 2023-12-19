// Layout.js

import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <Container style={{ flex: 1 }}>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
