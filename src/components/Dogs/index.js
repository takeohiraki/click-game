import React from "react";
import {
  Card,
  CardImg,
} from "reactstrap";

function Dogs(props) {
  return (
    
    <div>
      <Card>
        <CardImg
          top
          width="25%"
          src={props.image}
          alt="Card image cap"
          onClick={() => props.handleClick(props.id)}
        />
      </Card>
    </div>
  );
}

export default Dogs;
