import React from "react";
import glamorous from "glamorous";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";

const Code = ({children, type}) => {
  const CodeTag = glamorous.code({
    fontSize: Sizes.sub,
    borderRadius: "2px",
    padding: "0 2px",
    margin: "0 4px",
    background: Colors.gray3,
    whiteSpace: "nowrap"
  })
  let el;
  if (type === "i") {
    el = (
    <CodeTag>
      {children}
    </CodeTag>
    )
  }
  return (el)
}

export default Code;