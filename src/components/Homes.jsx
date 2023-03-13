import React from "react";
import styled from "styled-components";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap";

const Homes = () => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <CardBody>
        <CardTitle tag="h5">English Course </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Beginner course
        </CardSubtitle>
      </CardBody>
      <img
        alt="Card cap"
        src="https://www.allisonacademy.com/wp-content/uploads/2021/10/education-is-important.jpg"
        width="100%"
      />
      <CardBody>
        <CardText>
          You will have a chance to learn English from the alphabet to the
          Speaking level.
        </CardText>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Link</CardLink>
      </CardBody>
    </Card>
  );
};

export default Homes;
