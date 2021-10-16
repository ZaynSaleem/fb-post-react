import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./style.css";
import Avatar from "./assets/imgavatar.png";
import FbImageLibrary from "react-fb-image-grid";
import like from "./assets/like.gif";
import Love from "./assets/love.gif";
import haha from "./assets/haha.gif";
import wow from "./assets/wow.gif";
import sad from "./assets/sad.gif";
import angry from "./assets/angry.gif";
import hahareact from "./assets/hahaReact.png";
// import hahareact from "./assets/hahaReact.png";
import lovereact from "./assets/LoveReact.png";

// import  FacebookSelector  from 'react-reactions';
// import Reactions from "rc-actions";
// import {FacebookEmoji} from "react-facebook-emoji";

export default function fbpost(props) {
  // const images = [
  //   { id: "like", description: "Like", img: "http://i.imgur.com/LwCYmcM.gif" },
  //   { id: "love", description: "Love", img: "http://i.imgur.com/k5jMsaH.gif" },
  //   { id: "haha", description: "Haha", img: "http://i.imgur.com/f93vCxM.gif" },
  //   { id: "yay", description: "Yay", img: "http://i.imgur.com/a44ke8c.gif" },
  // ];

  return (
    <Container>
      <Row>
        <Col sm={12} md={{ size: 6, offset: 3 }} className="card-posting">
          <div className="card-posting-head">
            <img src={Avatar} alt="Avatar" className="avatar" />

            <div className="ms-2">
              <h6>{props.name}</h6>

              <p>1d • Karachi, Pakistan</p>
            </div>
          </div>
          <div className="mt-2 card-posting-text">
            <p>{props.description}</p>
          </div>
          <Row>
            <Col md={12} sm={12}>
              <div className="mt-4 images-box">
                <FbImageLibrary
                  images={props.images}
                  hideOverlay={true}
                  className="abc"
                  countFrom={3}
                />
              </div>
            </Col>
          </Row>
         
           <div className="mt-3 ms-4 card-posting-bottoms">
              <img src={like} alt="Avatar" className="avatar-emoji-react " />{" "}
              <img
                src={lovereact}
                alt="Avatar"
                className="avatar-emoji-react "
              />{" "}
              <img
                src={hahareact}
                alt="Avatar"
                className="avatar-emoji-react "
              />{" "}
              <div className="ms-2">
                Zain ul Abedin, Shahzaib Khan and 1.5k others
              </div>
              <div className="ms-5">8 Comments</div>
              <div className="ms-5">30 Shares</div>
         </div>
        
          <div className="reaction-button mt-3">
            <Button className="aaaa">
              {props.click === "like" ? (
                <img
                  src={like}
                  alt="Avatar"
                  className="avatar-emoji-show ms-2"
                />
              ) : props.click === "Love" ? (
                <img
                  src={Love}
                  alt="Avatar"
                  className="avatar-emoji-show ms-2"
                />
              ) : props.click === "Haha" ? (
                <img
                  src={haha}
                  alt="Avatar"
                  className="avatar-emoji-show ms-2"
                />
              ) : props.click === "Wow" ? (
                <img
                  src={wow}
                  alt="Avatar"
                  className="avatar-emoji-show ms-2"
                />
              ) : props.click === "Sad" ? (
                <img
                  src={sad}
                  alt="Avatar"
                  className="avatar-emoji-show ms-2"
                />
              ) : props.click === "Angry" ? (
                <img
                  src={angry}
                  alt="Avatar"
                  className="avatar-emoji-show ms-2"
                />
              ) : (
                <div>
                  <img
                    src={like}
                    alt="Avatar"
                    className="avatar-emoji-show-disable ms-2"
                  />
                  Like
                </div>
              )}
              {props.click}
              <div className="emoji mt-1">
                <button onClick={() => props.data("like")}>
                  <img src={like} alt="Avatar" className="avatar-emoji ms-2" />
                </button>
                <button onClick={() => props.data("Love")}>
                  <img src={Love} alt="Avatar" className="avatar-emoji ms-2" />
                </button>
                <button onClick={() => props.data("Haha")}>
                  <img src={haha} alt="Avatar" className="avatar-emoji ms-2" />
                </button>
                <button onClick={() => props.data("Wow")}>
                  <img src={wow} alt="Avatar" className="avatar-emoji ms-2" />
                </button>
                <button onClick={() => props.data("Sad")}>
                  <img src={sad} alt="Avatar" className="avatar-emoji ms-2" />
                </button>
                <button onClick={() => props.data("Angry")}>
                  <img src={angry} alt="Avatar" className="avatar-emoji ms-2" />
                </button>
              </div>
            </Button>
            <Button>Comment</Button> <Button>Share </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
