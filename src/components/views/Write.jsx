import React from 'react'
import { Container, Dropdown,Form } from 'react-bootstrap'
import { useState , useRef} from 'react';

const Write = () => {
    const [imageSrc, setImageSrc] = useState('img/camera.png');

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {    
            setImageSrc(reader.result);
            resolve();
          };
        });  
      };

      const selectFile = useRef("");

    return (
    <Container className='d-flex mt-5'>

        <div   style={{backgroundColor:"#E7E7E7",marginRight:"20px"}} onClick={() => selectFile.current.click()} className="container">
        <input type="file"  style={{ display: "none" }}
        ref={selectFile} onChange={(e) => {


        encodeFileToBase64(e.target.files[0]);
      }} />
        <div className="preview">
          {imageSrc && <img src={imageSrc} alt="preview-img" />}
        </div>
      </div>

        <div style={{width:"100%"}}>
            <div><input type="text" placeholder='제목을 입력해주세요' style={{width:"100%",marginBottom:"20px",backgroundColor:"#E7E7E7",border:"none"}}></input></div>
            <div>
              
            <Dropdown className='filter'>
                <Dropdown.Toggle className='filter-list' variant="info" id="dropdownMenuLink" aria-expanded="false"  style={{width:"30%"}}>
                    필터
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">#맛집</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">#맛집</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">#맛집</Dropdown.Item>
                </Dropdown.Menu>
                
            </Dropdown>
            <Dropdown className='filter'>
                <Dropdown.Toggle className='filter-list' variant="info" id="dropdownMenuLink" aria-expanded="false" style={{width:"30%"}}>
                    필터
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">#맛집</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">#맛집</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">#맛집</Dropdown.Item>
                </Dropdown.Menu>
                
            </Dropdown>
            <Dropdown className='filter'>
                <Dropdown.Toggle className='filter-list' variant="info" id="dropdownMenuLink"  aria-expanded="false" style={{width:"30%"}}>
                    필터
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">#맛집</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">#맛집</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">#맛집</Dropdown.Item>
                </Dropdown.Menu>
                
            </Dropdown>
            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1" >
              <Form.Control as="textarea" rows={12} style={{backgroundColor:"#E7E7E7"}} />
            </Form.Group>
            </div>
            <div>
              <button className='succes-write' ><label>완료</label></button>
            </div>
        </div>
    </Container>
  )
}

export default Write;