import React from 'react'

const SNSPostMain2 = () => {
  return (
    <div className='col'>
        <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="자리 표시자: 썸네일" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">이미지</text></svg>

            <div className="card-body">
              <p className="card-text"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>SNS 포스팅 글 부분이 여기 표시 됩니다</font></font></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>보여 주다</font></font></button>
                  <button type="button" className="btn btn-sm btn-outline-secondary"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>수정하다</font></font></button>
                </div>
                <small className="text-muted"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>9분</font></font></small>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SNSPostMain2