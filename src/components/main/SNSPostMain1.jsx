import React from 'react'
import { Container } from 'react-bootstrap'
import SNSPostMain2 from './SNSPostMain2'
function arrayPostFunction(){
  const arrayPost = [];
    for (let i = 0; i < 16; i++) {
      arrayPost.push(<SNSPostMain2/>)
    }
    return arrayPost
  }

const SNSPostMain1 = () => {
  return (
    <Container>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3'>
            {arrayPostFunction()}
            
        </div>
    </Container>
  )
}

export default SNSPostMain1