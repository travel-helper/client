import React from 'react'
import ThumbNail from './postThumbNail'

function UserProfile(props) {
  return (
    ///유저 프로필 박스
    <div>
        <div>
            <div>
                유저 프로필 사진
                <img />
            </div>
            <div>
                <div>
                    <p 팔로잉 />
                    <span>{props.follwing}</span> 
                </div>
                <div>
                    <p 팔로워 />
                    <span>{props.follwer}</span> 
                </div>
                <hr />
                <div>
                    <div>
                        <img></img>
                        <span>{props.heart}</span>
                    </div>
                    <div>
                        <img></img>
                        <span>{props.bookMark}</span>
                    </div>
                </div>
                <button>설정</button>
            </div>
        </div>
        <div>   
            <div>
                <h2>포스팅</h2> 
                <h2> {props.posting}</h2>
            </div>
            <div>
                <ThumbNail />
                <ThumbNail />
                <ThumbNail />
            </div>
            
        </div>

    </div>
  )
}

export default UserProfile