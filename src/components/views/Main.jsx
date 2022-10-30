import React from 'react'
import { Link } from 'react-router-dom'
import BannerSlider from '../main/BannerSlider'
import SNSPostMain1 from '../main/SNSPostMain1'

const Main = () => {
  return (
    <div className='container'>
      <div>
        <BannerSlider/>
      </div>

      <div id="main_menu">
        <div id="main_menu_list">
          <div>
            <img src={'img/follwing.png'} alt="logo" id=""/>
            <Link to="/following" id="following_go"  style={{ textDecoration: "none", color:"black" }}>팔로잉</Link>
          </div>
          <div>
          <img src={'img/travel50.png'} alt="logo" id=""/>
            <Link to="/travel" id="travel_go"  style={{ textDecoration: "none" ,color:"black"}}>여행</Link>
          </div>
          <div>
          <img src={'img/event64.png'} alt="logo" id=""/>
            <Link to="/event" id="event_go"  style={{ textDecoration: "none", color:"black" }}>이벤트</Link>
          </div>
          <div>
          <img src={'img/qna.png'} alt="logo" id=""/>
            <Link to="/qa" id="qa_go"  style={{ textDecoration: "none", color:"black" }}>문의</Link>
          </div>
        </div>
      </div>

      <div>
        <label>포스트</label><label>를 팔로잉 해보세요!</label>
      </div>
      <div>
        <SNSPostMain1/>
      </div>
    </div>
      
    
  )
}

export default Main