import React from "react";
import { Link } from "react-router-dom";

const Travel = () => {
  return (
    <div>
      <div className="board_btn">
        <button>
          <Link
            to="/community"
            style={{ textDecoration: "none", color: "black" }}
          >
            팔로잉
          </Link>
        </button>
        <button style={{ background: "#32D2C9" }}>
          <Link to="/travel" style={{ textDecoration: "none", color: "black" }}>
            여행
          </Link>
        </button>
        <button>
          <Link to="/event" style={{ textDecoration: "none", color: "black" }}>
            이벤트
          </Link>
        </button>
        <button>
          <Link to="/qa" style={{ textDecoration: "none", color: "black" }}>
            Q&A
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Travel;
