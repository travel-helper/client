import React from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SNSPostMain2 from "./SNSPostMain2";
import { loadPosts } from "../../_actions/postAction";

const SNSPostMain1 = () => {
  const dispatch = useDispatch();

  const { mainPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <Container>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {mainPosts.map((post) => (
            
          <SNSPostMain2 content={post.content} />
        ))}
      </div>
    </Container>
  );
};

export default SNSPostMain1;
