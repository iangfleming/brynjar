import React from "react";
import glamorous from "glamorous";

const ProjectModal = ({children}) => {
  return (
      <glamorous.Div
        border="1px solid red"
        height="100vh"
        width="100vw"
        position="fixed"
        top="0"
        left="0"
        background="white"
        zIndex="100"
      >
        <glamorous.Div
          overflow="scroll"
          height="100%"
          padding="1.5rem"
        >
          {children}
        </glamorous.Div>
      </glamorous.Div>
  )
}
export default ProjectModal;