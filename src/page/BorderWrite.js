import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import { useState , useRef} from 'react';

const BorderWrite = () => {
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
    <Container className='d-flex'>
        
        <div   onClick={() => selectFile.current.click()} className="container">
        <input type="file"  style={{ display: "none" }}
        ref={selectFile} onChange={(e) => {
        
    
        encodeFileToBase64(e.target.files[0]);
      }} />
        <div className="preview">
          {imageSrc && <img src={imageSrc} alt="preview-img" />}
        </div>
      </div>

        <div>
            <input type="text"></input>
            <Dropdown className='filter'>
                <Dropdown.Toggle className='bg-secondary' variant="success" id="dropdown-basic">
                    필터
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">#맛집</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">#맛집</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">#맛집</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Container>
  )
}

export default BorderWrite