import React from "react";
import "./style.css";

function Header(props){

   return<div className="header" status={props.status} style={{backgroundColor: "lavender"}}>{props.children}</div>;

}
    
    //<h1>Score:{props.score} | Highscore:{props.topScore}</h1>
    
//     <div className="header" style={{backgroundColor: "lavender"}}>
//       {/* <div className="title">{props.children}</div> */}
//       <div className="scores">
//       return
//         <h1>Score:{props.score}  | Highscore: {props.topScore}</h1>
//       </div>
//     </div>
//   );
  
  export default Header;