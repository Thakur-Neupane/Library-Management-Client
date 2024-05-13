import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header />
      <main className="main min-vh-75">{children}</main>

      {/* Footer */}

      <Footer />
    </div>
  );
};
