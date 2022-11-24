import React,{useState} from 'react'
import List from './List.jsx'
import Modal from 'react-modal'

function FollowPage(){
  const [modalIsOpen, setModalIsOpen]=useState(false);
  return(
    <>
      <button onClick={()=> setModalIsOpen(true)}>Modal Open</button>
      <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
        {/* 여기에 내용들어감 */}
        <div>
          <h1>팔로잉</h1>
          <hr/>
          <div> {/* list들이 들어간다 */}
              <List name="wlq" img="C:\client\public\img\Bell.png"/>
          </div>
        </div>
        </Modal>
    </>


  )
}

export default FollowPage;

// export default function FollowPage(){
//   return(
//     FollowPage()  

//   )
// }