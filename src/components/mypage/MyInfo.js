import React from 'react'
import { Checkbox } from 'react-bootstrap'
import DatePicker from "react-datepicker";


function MyInfo(props) {
  return (
    <div>
        <div>
            <h4>프로필</h4>
            <h4>설정</h4>
        </div>
        <div>
            <div>
                <h2>회원정보 수정</h2>
                <button>수정완료</button>
            </div>
            <div>
                <div>
                    <h6>이메일</h6>
                    <input></input>
                </div>
                <div>
                    <h6>별명</h6>
                    <input></input>
                </div>
                <div>
                    <h6>성별</h6>
                    <input type="Checkbox" name="sex"></input>
                </div>
                <div>
                    <h6>생일</h6>
                    <input></input>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyInfo