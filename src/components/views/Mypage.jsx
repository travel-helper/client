import React from 'react'
import { Container,Title, UserInfo, Id, Value, Line, Link, Btn } from 'react-bootstrap';
import { useUserState } from '../UserContext';

const Mypage = () => {
    const {user}=useUserState();
  return (
    <div>
        <Container>
            <Title> 마이페이지</Title>
            <UserInfo>
                <Id>* 아이디 : </Id>
                <Value>
                    {user.userId}
                    <Line/>
                </Value>
            </UserInfo>
            <Link to="">
                <Btn type="submit" value="수정"/>
            </Link>
        </Container>




    </div>
  )
}

export default Mypage