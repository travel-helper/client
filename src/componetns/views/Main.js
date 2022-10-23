import React from 'react'
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
          <div>팔로잉</div>
          <div>여행</div>
          <div>이벤트</div>
          <div>Q&A</div>
        </div>
      </div>

      <div>
        <label>오늘의</label><label>포스트</label><label>를 팔로잉 해보세요!</label>
      </div>
      <div>
        <SNSPostMain1/>
      </div>
    </div>
      
    
  )
}

export default Main