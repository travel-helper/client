import React from 'react'
import Recommend_travel from '../components/main/Recommend_travel';
const Main = () => {
  return (
    <div className='container'>
      
      

      <div id="main_travel_rec">
        <Recommend_travel/>
        <Recommend_travel/>
        <Recommend_travel/>
      </div>

      <div id="main_menu">
        <div id="main_menu_list">
          <div>팔로잉</div>
          <div>여행</div>
          <div>이벤트</div>
          <div>Q&A</div>
        </div>
          
        
      </div>
      
    </div>
      
    
  )
}

export default Main