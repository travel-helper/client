import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function Board() {
  return (
    <div>
        <div className='board_btn'>
            <button><Link to="/following" style={{ textDecoration: "none", color: "black"}}>팔로잉</Link></button>
            <button><Link to="/travel" style={{ textDecoration: "none",color: "black" }}>여행</Link></button>
            <button><Link to="/event" style={{ textDecoration: "none",color: "black"}}>이벤트</Link></button>
            <button style={{background: "#32D2C9"}}><Link to="/qa" style={{ textDecoration: "none",color: "black"}}>Q&A</Link></button>
        </div>

      <div className='container'>
        <div className='board_choice'>
            <button>공지사항</button>
            <button>Q&A</button>
            <button>1:1 문의</button>
        </div>

    
    <Table responsive className='mt-4'>
      <thead>
        <tr style={{backgroundColor:"#F1F1F1"}}>
          <th>No.</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>작성시간</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>게시판에 대해 문의 합니다.</td>
          <td>travel</td>
          <td>22-11-21</td>
        </tr>
        <tr>
          <td>2</td>
          <td>게시판에 대해 문의 합니다.</td>
          <td>travel</td>
          <td>22-11-21</td>
        </tr>
        <tr>
          <td>3</td>
          <td>게시판에 대해 문의 합니다.</td>
          <td>travel</td>
          <td>22-11-21</td>
        </tr>
        <tr>
          <td>4</td>
          <td>게시판에 대해 문의 합니다.</td>
          <td>travel</td>
          <td>22-11-21</td>
        </tr>
        <tr>
          <td>5</td>
          <td>게시판에 대해 문의 합니다.</td>
          <td>travel</td>
          <td>22-11-21</td>
        </tr>
        <tr>
          <td>6</td>
          <td>게시판에 대해 문의 합니다.</td>
          <td>travel</td>
          <td>22-11-21</td>
        </tr>
        <tr>
          <td>7</td>
          <td>게시판에 대해 문의 합니다.</td>
          <td>travel</td>
          <td>22-11-21</td>
        </tr>
        <tr>
          <td>8</td>
          <td>게시판에 대해 문의 합니다.</td>
          <td>travel</td>
          <td>22-11-21</td>
        </tr>
        <tr>
          <td>9</td>
          <td>게시판에 대해 문의 합니다.</td>
          <td>travel</td>
          <td>22-11-21</td>
        </tr>
      </tbody>
    </Table>
      </div>
    </div>
  );
}

export default Board;