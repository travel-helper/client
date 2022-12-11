import React, { useState } from "react";
// import styled, { css } from "styled-components";
import Modal from "../Modal";
import PostDetail from "../views/PostDetail";

const SNSPostMain2 = ({ content, nickname, thumbnail }) => {
  const [isListHover, setIsListHover] = useState(false);
  const heart = require("../../image/heart.png");
  const pinkHeart = require("../../image/heart_hover.png");

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="col">
      <div style={{ display: "flex" }}>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaGhocGhwcGhwcHB8cHBoaGhocHB4cIS4lIR4rISEaJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND8/ND8/Pz80P//AABEIAQAAxQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADYQAAEDAgMFBgYCAwEAAwAAAAEAAhEDIQQSMQVBUWFxIoGRobHRBhMyweHwUmIUQvGSBxWC/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAQEAAwEBAQEAAAAAAAAAARECEiExA1FxQf/aAAwDAQACEQMRAD8A86JTZkHMnlZthw5LMq+ZIOQQ2ZMXIcpSgJZk0pJIGnlJMnCAZOlKYoBKbGEqVKnJW9svZ4OqDVcHs6dQtrDbFady2MHs8QtOhhIUXpU5cvjPhkES2y5zGbLew3Fl60ykqG0dnteNETsXl5RkSFNdPtHYmUkhUm4FaZrKsYUeSI2gVrjChEbhwE8GscYYqTcKtj5ScUkwyv8AESWmXNG8DvASQHJFyYuUAU0pYYpKQchhOjC0UFPKGApBKmmnSDU4YkDBOApBqfKgIpAImVKEHg+Db2hZdfsxlhZcrgxcLrdmBT18Pn66LCMsroEKphdFbWFvttIICoVW2UcyZ9TdqnyVrJx7Jlc9Up3K6LH0Kj/oyt5lY7vhE1DNWs8g/wCrey3xPsujn4w6ZlbFU2fW9o5TfwCqjarXmKbH1D/VsDxK6zC/DGGp3DGk/wBpefOy1GUGtEBsDnDR4BWjXEMweMfpTZSHF5k+CtUvhN7r1cQ88WsGUeK67NuBHRjZ81FwOpEc3H7BMtc/T+F8I0QWBx4uJJ8ky3Mx4n/8tskmHjICkkkpaEiMZKgtf4fwDqlQNEd+h5KbRmqX+M7hzCPTwhNoN/XcvXMB8MsyBrmg/ZHdsCm2BlFln13I055ePPwj7WMqWHwxdmEXAJXrdTYbD/qJVej8NsDy8NEmZSn6Si8PLHYNwNxqJA/e9McMQTIIj99vFeuH4dYQBGmnsnHwxTkOgToeYR5weDyZmBdEwSNx5Qf3qj4vZrmkW1uOlp8yB3r1mh8Psa0CNNEV+xGEgkae4P2CPMeLyGhhHg6HW3fH73rqdmUniJC7ZmwGCOyLR5I7tls3Dei9bBJjBougKw1yv19mAaI1PZwAE3t9ljntprMe5NK0amFBOiJRwjQnOsTYzWO5gdBJUXM3kd73QPBbjcAxVsTs0QSBJ5rfnqMuuWYXbs3cxv3UH095aBzeZ8kQn+xjg0QPFZ+J2nQZq5s8BL3eVlrrPFkOBtmc7kwQPFRyxMNa08+05YeM+KmizGE83nKP/LbrFxO3Kz9HZRpDBkHui9Q5za7J1SNXnxDfIlJedkuOpHfc+KSXkrxc/CUKUJ7JgmtXpXwLgIbmc0RuXneF+obr8F6/sABrGAcFl+l9NOI6lroCA6pe+ig/EDcpMIKw6rSJZZRWMTNbwRGlRDOGp8qdIu3II2VEYoKQKJSqW9QhSUmo0sNlTvCcqLk9AJYAgPN7aKy5Be1TVhfO3Kw2oIWZXeAU7MSIROivOub+MMMMmcTrpJjwXEQdJ14WXpO1e0x45Lzl9AgnM+L6DVdXHWxl1MAdDeAQw5xsAfNHDW7m97j9gne8f2dyFh4BWWUH/H4uDTwkJKQed0BJB4wQxPlUpCkOieoGwjYcDwXqOxsQcjSQLDff0Xm+BokkGIuvQ9ntGQCT+9yz7+NOGsyqHusVqUVlYGk3d++C1GFYVqtMcpgoAKdrlFCyCkChZkxegC5kSUAFTzJARqm0oDXp2uRpWDFyg4qAck56NGHJlQqcAkSlmTNQrUhdZ73gGBqtbENkLAxLMpmbJWCUWu3sm+5cHjqOUugxzN967im/MN64rbVE5jqLnUBb/lUdemU57eqg7EwdJP73ogYwRmd5JZwPpZ3ust2aEPdf7e6ZShzry7usPykgMkNTgjirtPZs/U8nkLK0zAsbqB3oLEdlOfmGWY38PNd3gXS0TfuXN7PIldfhW9kQB+9yz7VyvYaByVxrucqix9rqRrc1jWzQD1IPWcMQpHEKKF/PCfOqLa/NO2sEguh6mKiz843JCulhr7qicVFm/OU2V0ixoZ0syqtqJOqphZ+Yi5lQbW5ojKqcCy4SqGMwoeFcbUBTlXE1iNpZbALiPiAw9zTv56dV6JiqZAlcLt+g3Pmc0nkD6rXhHVYdFrRJGUczc+JSNRgJMlx46+ZSewkRla1u4QEwIbw6xqtkf6cv/rPVJQzE6AlJIJ/NGk24NsEwfua0DnqpNcwWEu5aBGa95+lrWDibeqoxtm4dxeC7NE9F3GHpwBaPFcZs94DwXPzHlf1XbYeoMth5rPv4qGe6FWqVxvTY071jYjERK560nxquxI3a9R7p24nl5rn6O0AZDjCmcUAc2YnqnOTtjdNa9z+9ykKvFZDMWx1wL9yX+Yp8Q2XYqBYygnFmVkVcXpBlBdjIk+XNHiG8zGE8kdmI5rlhjyrNHGHu8UvEOmZiZRPnLnm4p0XPghjawBifNOclbHSGuOiTcQucrbYG4KxhtoFyVmKkdRQqSrbHBYeGxC0aVVHNTVt7JXM/EWElsix/eC6M1Vz+38U4MIiJ33W/LOuEqFocf9j5Iecutu4DRSeWgyYKh89zrMGnHctU+kiHEmSeVkk/+K7VzrnuHckgIio7cGsHmouqN39pTp4Qf7Eu6e6Myi2P4jzV5BdPgHkvAiAu4wziGjKQuIzMYRlEniuj2TiTlGs84A9SSsuocHxTzvWNiaZ5rpshdvCTcBPNZWNJ04HE4Z53LLxj3sF5HevTK+zhey534h2MX03Bn1Zbc05cvsrdjiNm7Ve1/bJLd/ELpKW0mObLXzHpzC46rg3iTlIGhsbdd4VvZeyq1VzWMY68XGnUrbrnmzWXPXUuOmp4wOmOhsEqryO0dOht3Lbw3wU0MBe4udvgQAqtT4baA7K47wCelrfuqwtjfLjHdigdAZVrA4tomTYaytzZ3wox4kuJI14eCD8Q/CZDCWSSBoNSOFkpZosuOa21t4ZclJwJOpmI/eK57Eh7HkOeHOB1a7M09CLEcxZFx+zXsI7LoPI66IeGwr3va1sucbCLyd5ngumTmRzW3XWYFj3MDspItdauDqgWIIWzs7ZmSmxh1AAt0ujnZgK5evfx083PqOFeLLXotWR/ilmivYeupk9jqrzzbWFz236rshA9bea16mIEGQuS2/iCezmDRqTOo4LfmMqxCxjfquUwe50Brco4u6KBqNsGDMeJ+wRHYdxHbdlb1haJQIpj6nFx4pJfOpNs1hdzJToP0sOe4ifpHP2QnvZpGYhO6nH1PHTU+Sm2AOyzvcfstCDYHusB4BXsLWyakE8pPmqr3TYuLv6t0RGUX2hoYOJuVNha6jB4oEAwZPT3Wvh32vK5PBHcHEkb5Wvh8a1ovHqsrzim1UM9FQrUcx3d/wCFFmODxpZArYvhYcQpsh83Df8A1zGuzkAGP2Va2fgmg59CdIO4qpSq/MIbJA3k7/wt/DZWm8aazHkbJe76XLJ7VsTjMjDn7NtSbfhcbi9s0jOWrPEe0oX/AMqY4j5bGOOV0kgH+Me/ouDZjOx9IkTeLnqtJ+Uz2i/rZXp/w9tgF3ZdM7h6Fda6sY7cT6LxP4ZxTziKZaP9ujY4XsvbaZa4SBHn6KOvyz4fPe/WWzC0i8tDAQbkRLZN940PDRWKWzqLCSxjWO3lrQ0+iuVsEP5kHlZCYcohzz3u/Hopkvyqtn2JspCVZFEcFW+c3SZ6X9EVj+aMxN6pVaLSFm1KMHgtF71Qxj8oJJsE5NLyqhj8Zkb2hfdBv3LjMTTlxfUdE6N1PQAKxtXaL3vIaYbu48ys0U4O9x8T3rbnnEX2IMWQIptyj+RuT0VdzMzu0STwN3Hu4KwRH1OyjgLnxUqDHOsxtjv/ACdUzk/qIpkfxbydJPlokimnTbao+Ty3JJKyJ06Lj9LY5n9hTOGZq95d5BJ+Y6mOqgMoO9xWiRmVdzGju91F9Mm73R6ogY88Gt8FOixgIkFyBjU2fh8rNNbodR4FyJWj8zs2ECNFlYpY32aFTaLdwyxvmfCQfRVquMJ7WYxxsPW6p1xdA+Y0zmlPA1cDtNsnMdeJWsNvsDMrh2YtH3LjPgAuMq0ryFUrNcd5SwVe+IgK5GV0Rdtye7Ux+8FyjsI8E2mDGu9a+U8T1QKtB0WcFpKz6ntq/DLSx4c51x9NzYTeII/eK9Bo7aYxsh+Y7yDJnnm+5Xl9Ci46vjor1LCkXa49UWnJXptPbgO8EHjMjkQfVVjteXSLjfC4zDU37yVbbRc27SVl1NaT07RmNa4AgypitG+xXKYas4cVcpVzoUsJtVcXG+VibY2jmaWAnnHoqu08XkAAWSGPfdxyt5q+YAahA1PcPdPSpvcLCBxiP+pGpTYbAvd5JjUe8XdlbwH7dUNSDKbDrnd+25JOxD3mIgfxHoSnZhmtibx3JziBppbh+lCdD/x/0fdJRfU/sf3okgY0PlAfUZ5BP89rdBHqq+Q6uMJwANBJ4lWaT6jnG1hxP5Sp9kgl1+GvkoFw0J7gmY87o/eaBrpKT+yCdSqlcSi0nHK3ome2yzFZdems7EUls1mkqk+ne6AyySoEzqFoVKCAaPJM1EtSLOStFicUkErUmcVo0XhV/lIjKZSDTokcZsrfzRAjvCx2MM2KvUKJKMNb+YNQreEoyZKBQwxla+HpwE5EWsDb+KDHgAS6N+gWMW1H3JMcNB4Lc2/TaH5zrCxKuJ4C8ap4JUhh2t18fbcmfihoNI71VLydbnvThh3oCTqh03KAE2iyJDQOPL3/AArdMlzbNnm4Q0dBqT1SCk0Dr0CStZaY1OY79wHQQkmeUdruCg4zx6fhEbT3kwmzgfSJVH6RZhzrEdfZSytBG8pocbnREo0wXADeRdFJsPblDegUi4bhPFHxtPs23BY1PElpIWMu1VizVVN7FadUkeqAXSrToYZOqG+lKtBqKadk5BrJdQvCXylqOp8AoMpSnhaoiiUdlAK+2kBP74J6NJGDVWlRV7DshOxkEhHY2CmNHpsVoFV80qb9NUJcp8Qvd8yJ6CJWcWcbckbaeILqjoMwSO4IDKLnbo56BLYc0PONAPBFZh3u5Dy8UWGN07R8gmNRzraDklqpCDGM5nlpKcPe8wJjhEI7cK0QXnuUH4oCzeyOX3KR6f8AxGiznweA+6SrGsToI6pJjV3L/J33Pgna4f6jvKkzDf8AdyIajG21PJUQQpk75KNh6QD2ybkiw+6E6o46dkKVBsOHXeihvYh9u5YOKZe2i1n1JWfimLn+NVOpjoFxolRxQN1QxDPCVVz5Tqr56Z2OkZiA5Ha6YXM0sde6ts2jzWmpdASoTHcVmMxskXVkPsbo0L2ab71D5kHkq3zcouU/zcwTC3UqElHpcSVUaYVmgZsgtaAHDRNWEgjkVKnpCRU9FHEFrWkzcybe6Z73O6cAjvwpL3l3ZGY+pU/mNYOyJ5n7IWjTwkCXGEn1gNBHNV61aTqSVEUSddP26JAZ9YnSUmUN5KJYD3SDybC3r+E8H1KQNUkPKeXiAkkMX3l7ruNtw9kzWAckT5ZP1GB5p84H0ieZVQ8Qyxy6p2PAI3qYpuJk2nj7KWRjf7FBDufI7MLOq5hbx9kn1nMJI+k+STMU03HmsryvVKqTCz68LVxFQQVk4hyc5T1cis9yqveeKM8oD1pjPSbjXtIMyr2G204HtG0rKeEIowa6tmMzELXw9QRO5cjgK0iN4W5hq9oOs+Sn/p346Rrw4WR6AjdoszD4oAdyvsxYOiejFz5vFSz2J3KuDNyqe2cXkYcpubeOqn7T+MbE4mXuPFxjpyVcglQY3j++yuUQ0aju91WD/A2Ud/f/ANTudbj+7kXOX6COW78pqb8siJO47vz0Roz+hNoS2SY+/QIopxaPfx3ImTVzjHP2VWpitzLDjvKMG/wSo8AwTl4AJkJuBcbkgTxN0kbBlazKD3XdZPLGmBc8fyo1Xud+FKjRgfsKlX2iapdv7gnZT4nuUy8DQT6flDe7igg6rgLeiysQG9Oiv4h3BZFY3SK0J7yUB5R3BV3Jo0J6C8d3qjOG9BeQEjkV3N8EJ5RHklP8g70GjhXHOFtUK/FYzeyZC1cM9rgOKmnP41sNihoVpUMUsKnR4FXGDIe26BuUxXpsvxcAuO5ZGKxjqkbmhU8bjs/ZH0/sJUmmJ3cfZVE/VlmoA181YYAPqvy91WpOizdfNWW0QLv8PdP6Nz4mA553QOGlvVSfXaz6RJ6qu+uXdlunLerNLBBoDqhgbm7ynhe6rspvq9PABWWUWs07bt7joOSati7ZQIH8R9yqtWoTr3AaIVILVr34+SSC2i48kksPWw0gbgevsnAc6x9PIIbHkaWkR+89CjPxTjFgIJNp36zdUKBUEGIj1TEK4MW7XKCZ1MxaYgA21QK9XNFtOvGSb6dEJUntJCzsTSj3P2C2gz+Ik8Tp4KjiqY/2MnySGMYygVKjRzVnEUyTZBbgyd3eUFinUqFyTMKTc2HNWyxrOZ8kJ7yUGG7K3S6g5vFScfFRJSgCcxJjCJAMdEaI1TNumEzXeQJMDgLEojZMkmYQ8m4a70ak2BGvogviTBpafsr9NpI4DiVXYALnX90RBULrNQNWxVDR2fcqVOm95kmBxOianhw36rngjGqSYjoEHIssqMYIYJP8jogOe5/PmftwT/KiC/8A8orKRcO1ZsePQIP4pMYTYXVo0QwSTLvFEfVDey0Rz3/9Vd1xM+6C90z60xvSRaeBcRJgcJ1SQeP/2Q=="
          alt=""
          style={{ color: "blue", width: "20%" }}
          className="rounded-circle"
        />
        <div>
          <p className="fs-5 mt-4 ms-4">{nickname}</p>
        </div>
        <div
          style={{ float: "right", width: "50%" }}
          className="d-grid gap-2 d-md-flex justify-content-md-end"
        >
          <button
            className="btn bg-white"
            style={{
              color: "#32D2C9",
              border: "none",
              justifyContent: "end",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "19px",
            }}
          >
            팔로우
          </button>
        </div>
      </div>
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          src={`http://localhost:443${thumbnail?.substring(7)}`}
          role="img"
          aria-label="자리 표시자: 썸네일"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          alt=""
        />
        <title>Placeholder</title>
        <rect
          onClick={openModal}
          width="100%"
          height="100%"
          fill="#D9D9D9"
        ></rect>

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                onMouseOver={() => setIsListHover(true)}
                onMouseOut={() => setIsListHover(false)}
              >
                <img src={isListHover ? pinkHeart : heart} alt="like" />
              </button>
              <button>
                <img src={"img/comment.png"} alt="like" />
              </button>
            </div>
          </div>
          <p className="card-text">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>{content}</font>
            </font>
          </p>
        </div>
      </div>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        <div>
          <PostDetail />
        </div>
      </Modal>
    </div>
  );
};

export default SNSPostMain2;

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;
//   ${(props) =>
//     props.primary &&
//     css`
//       background: palevioletred;
//       color: white;
//     `}
// `;
