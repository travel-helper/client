import React from 'react'
import Account from './Account'

// 데이터에서 follwing목록에 있는 계정들만 불러올 수 있도록 해야함
function follwingList() {
  return (
    <div>=
        <div>
            <h2>팔로잉 목록</h2>
            <hr/>    
        </div>
        <div>
            <Account/>
            <Account/>
            <Account/>
        </div>
    </div>
  )
}

export default follwingList