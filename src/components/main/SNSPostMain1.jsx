import React from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SNSPostMain2 from "./SNSPostMain2";
import { loadPosts } from "../../_actions/postAction";

const SNSPostMain1 = () => {
  const dispatch = useDispatch();

  const { mainPosts, removePostDone, updatePostDone } = useSelector(
    (state) => state.post
  );

  console.log(mainPosts);
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch, removePostDone, updatePostDone]);
  return (
    <Container>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {mainPosts.map((post) => (
          <SNSPostMain2
            title={post.title}
            postId={post.id}
            tema={post.tema}
            region={post.region}
            priceRange={post.priceRange}
            content={post.content}
            nickname={post.User?.nickname}
            thumbnail={post.thumbnail}
          />
        ))}
      </div>
    </Container>
  );
};

export default SNSPostMain1;
