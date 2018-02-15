import React from "react";
import glamorous from "glamorous";

const Card = ({
  children,
  ...other
}) => {

  const handleClick = () => {
    console.log('hi')
  }

  const CardOuter = glamorous.div({
    height: "10rem",
    width: "10rem",
    border: "1px solid black",
    margin: "1rem"
  });

  return (
    <CardOuter
      onClick={handleClick}
    >
      {children}
    </CardOuter>
  )
};

export default Card;