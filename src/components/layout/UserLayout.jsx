import React from "react";
import { AuthRoute } from "../auth/AuthRoute";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UserSidebar } from "./UserSidebar";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

export const UserLayout = ({ children, pageTitle }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      <div>
        {/* Header */}
        <Header />
        <Container fluid>
          <Row>
            <Col xs={3} className="bg-dark text-light">
              <div className="p-3">
                <div>Welcome Back</div>
                <h3>{user.fName + "" + user.lName}</h3>
              </div>
              <hr />
              <UserSidebar />
            </Col>

            <Col>
              <div className="p-2">{pageTitle}</div>
              <main className="main ">{children}</main>
            </Col>
          </Row>
        </Container>

        {/* Footer */}

        <Footer />
      </div>
    </AuthRoute>
  );
};
