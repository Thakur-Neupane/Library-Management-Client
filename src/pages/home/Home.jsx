import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomCarousel } from "../../components/customCarousel/CustomCarousel";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CustomCard } from "../../components/customcard/CustomCard";

const Home = () => {
  return (
    <DefaultLayout>
      <CustomCarousel />

      {/* Book List */}

      <Container>
        <Row>
          <Col>
            <label html for="">
              20 Books found{" "}
            </label>
            <div>
              <Form.Control placeholder="Search by book Name" />
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <CustomCard />
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
