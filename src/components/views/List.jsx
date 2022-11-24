import React from "react";

function List(props) {
  return (
    <div>
      <h1> account List</h1>
      <div>
        {props.img}
        <img></img>
      </div>
      <div>{props.name}</div>
      <div>
        <p>팔로잉</p>
        <p>팔로우</p>
      </div>
    </div>
  );
}

export default List;
