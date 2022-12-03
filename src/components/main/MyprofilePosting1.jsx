import React from "react";
import { Container } from "react-bootstrap";
import MyprofilePosting2 from "./MyprofilePosting2";

function arrayPostFunction() {
  const arrayPost = [];
  for (let i = 0; i < 6; i++) {
    arrayPost.push(<MyprofilePosting2 />);
  }
  return arrayPost;
}

const MyprofilePosting1 = () => {
  return (
    <Container>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {arrayPostFunction()}
      </div>
    </Container>
  );
};

export default MyprofilePosting1;
