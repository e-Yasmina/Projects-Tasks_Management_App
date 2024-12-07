import React from "react";
import "./card.css"; 
import "../StickyNote/StickyNote";
import StickyNote from "../StickyNote/StickyNote";

const Card = (props) => {
  return (
    <div className="card">
      <div className="content">
        <div className="top">
          <p>Important</p>
          <div className="color"></div>
        </div>
        <div className="middle">
          <div>
            <p>List</p>
            <p>{props.title}</p>
          </div>
          
          <img
            src={props.image} 
            alt={props.title}
            class="rounded-image"
          />
          
        </div>
        <div className="sticker">
          <StickyNote/>
        </div>
        {/* <div className="bottom">
          <div>
            <p>Hue</p>
            <p>36</p>
          </div>
          <div>
            <p>Sat</p>
            <p>93</p>
          </div>
          <div>
            <p>Lum</p>
            <p>68</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
