import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Tabs from "react-bootstrap";
import { Tab } from "react-bootstrap";
import Spinner from "react-bootstrap";
import { ReviewBlock } from "../../components/customCard/ReviewBlock";
import { Stars } from "../../components/stars/Stars";

const BookLanding = () => {
  const { _id } = useParams();
  const { books } = useSelector((state) => state.bookInfo);
  const book = books.find((item) => item._id === _id);
  if (!books?._id) {
    return <Spinner animation="border" variant="primary" />;
  }
  const { thumbnail, title, author, publishedYear, description } = book;

  console.log(book);
  return (
    <DefaultLayout>
      <Row className="g-2">
        <Col md={6}>
          <div className="" style={{ maxWidth: "450px" }}>
            <img src="{thumbnail}" alt="" width={"100%"} />
          </div>
        </Col>
        <Col md={6}>
          <h1>{title}</h1>
          <p>
            {author} - {publishedYear}
          </p>

          <Stars stars={3} />

          <p className="mt-5">{description.slice(0, 130)}</p>

          <div className="d-grid">
            <Button>Burrow this Book</Button>
          </div>
        </Col>
      </Row>

      <Row className="py-5">
        <Col>
          {/* tabbar */}
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="rviews" title="Reviews">
              Tab content for Reviews
              <ReviewBlock />
            </Tab>
            <Tab eventKey="description" title="Description">
              {description}
            </Tab>
          </Tabs>
          {/* contentArea */}
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default BookLanding;
