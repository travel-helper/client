import { Link } from "react-router-dom";
import Banner from "../event/Banner";

const Event = () => {
  return (
    <div>
      {/* <div className="board_btn">
        <button>
          <Link
            to="/community"
            style={{ textDecoration: "none", color: "black" }}
          >
            팔로잉
          </Link>
        </button>
        <button>
          <Link to="/travel" style={{ textDecoration: "none", color: "black" }}>
            여행
          </Link>
        </button>
        <button style={{ background: "#32D2C9" }}>
          <Link to="/event" style={{ textDecoration: "none", color: "black" }}>
            이벤트
          </Link>
        </button>
      </div> */}
      <div className="col-n">
        <div className="row-md-3">
          <Banner title="제주도갈래 집갈래" />
          <Banner title="핫 이슈 대구 맛집" />
          <Banner title="오션뷰가 끝내주는 숙소" />
        </div>
        <div className="row-md-3">
          <Banner title="제주도갈래 집갈래" />
          <Banner title="핫 이슈 대구 맛집" />
          <Banner title="오션뷰가 끝내주는 숙소" />
        </div>
        <div className="row-md-3">
          <Banner title="제주도갈래 집갈래" />
          <Banner title="핫 이슈 대구 맛집" />
          <Banner title="오션뷰가 끝내주는 숙소" />
        </div>
        <div className="row-md-3">
          <Banner title="제주도갈래 집갈래" />
          <Banner title="핫 이슈 대구 맛집" />
          <Banner title="오션뷰가 끝내주는 숙소" />
        </div>
        <div className="row-md-3">
          <Banner title="제주도갈래 집갈래" />
          <Banner title="핫 이슈 대구 맛집" />
          <Banner title="오션뷰가 끝내주는 숙소" />
        </div>
      </div>
    </div>
  );
};

export default Event;
