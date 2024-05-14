import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Container from "react-bootstrap/esm/Container";

export const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <div>
      {/* Header */}
      <Header />
      <Container />
      <div className="p-2">{pageTitle}</div>
      <main className="main ">{children}</main>

      {/* Footer */}

      <Footer />
    </div>
  );
};
