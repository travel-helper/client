import React from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyprofilePosting2 from "./MyprofilePosting2";

const MyprofilePosting1 = () => {
  const dispatch = useDispatch();

  const { mainPosts, removePostDone, updatePostDone } = useSelector(
    (state) => state.post
  );

  // useEffect(() => {
  //   dispatch(loadPosts());
  // }, [dispatch, removePostDone, updatePostDone]);

  return (
    <Container>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {mainPosts.map((post) => (
          <MyprofilePosting2
            postId={post.id}
            content={post.content}
            nickname={post.User?.nickname}
            thumbnail={post.thumbnail}
            title={post.title}
          />
        ))}
      </div>
    </Container>
  );
};

export default MyprofilePosting1;
