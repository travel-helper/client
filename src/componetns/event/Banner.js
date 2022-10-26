import React from 'react'
import {BrowserRouter as Link} from "react-router-dom"


function Banner(props){

  return (
	<div className=''>
		<div className="eventBanner" >
			<div className="eventBannerLayout">
				<h2 className="eventBannerTitle">{props.title}</h2>
				<p className='eventBannerText'>지금 이동하기</p>
			</div>
			
		</div>
		
	</div>
	
  )
}

export default Banner
