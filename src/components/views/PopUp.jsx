// 이거는 Follow / FollowerPage에 편입시키는게 낫지 않나...싶어서 뺄 확률이 높음

import React,{useState} from 'react'
import List from './List.jsx'
import Modal from 'react-modal'

function PopUp(){
  const [modalIsOpen, setModalIsOpen]=useState(false);
  return(
    <>
      <button onClick={()=> setModalIsOpen(true)}>Modal Open</button>
      <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
        {/* 여기에 내용들어감 */}
        </Modal>
    </>


  )
}

export default function Popup(){
  return(
    
    <div>
      <h1>팔로잉</h1>
      <hr/>
      <div> /* list들이 들어갈거임 */
          <List/>
      </div>
    </div>

  )
}