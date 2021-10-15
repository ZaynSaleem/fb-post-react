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
        <Col md={6} className="card-posting">
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
          <div className="mt-4 images-box">
            <FbImageLibrary
              images={props.images}
              width={50}
              hideOverlay={true}
              className="abc"
            />
          </div>
          <div className="mt-3 card-posting-bottoms">
            Zain ul Abedin, Shahzaib Khan and 1.5k others
            <div className="ms-5">8 Comments</div>
            <div className="ms-5">30 Shares</div>
          </div>

          <div className="reaction-button mt-3">
            <Button className="aaaa">
              {props.click}
              <div className="emoji mt-1">
                <Button onClick={()=> props.data("like")}>
                  <img src={like} alt="Avatar" className="avatar-emoji ms-2" />
                </Button>
                <Button  onClick={()=> props.data("love")}>
                  <img src={Love} alt="Avatar" className="avatar-emoji ms-2" />
                </Button>
                <Button  onClick={()=> props.data("Haha")}>
                  <img src={haha} alt="Avatar" className="avatar-emoji ms-2" />
                </Button>
                <Button  onClick={()=> props.data("Wow")}>
                  <img src={wow} alt="Avatar" className="avatar-emoji ms-2" />
                </Button>
                <Button  onClick={()=> props.data("Sad")}>
                  <img src={sad} alt="Avatar" className="avatar-emoji ms-2" />
                </Button>
                <Button  onClick={()=> props.data("Angry")}>
                  <img src={angry} alt="Avatar" className="avatar-emoji ms-2" />
                </Button>
              </div>
            </Button>
            <Button>Comment</Button> <Button>Share </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
