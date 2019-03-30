import React from "react";
import "./style.css";

function ParrotCard(props) {
  return (
    <div className="card">
      <div className="img-container">
       
      
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div> */}
      <span onClick={() => props.score(props.id)} className="clicked">
         <img alt={props.name} src={props.image} />
      </span>
    </div>
    </div>
  );
}

export default ParrotCard;
