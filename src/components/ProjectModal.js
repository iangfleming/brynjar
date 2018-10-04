import React from "react";
import glamorous from "glamorous";

const ProjectModal = ({children}) => {
  return (
      <glamorous.Div
        height="100vh"
        width="100vw"
        background="white"
      >
        <glamorous.Div
          overflow="scroll"
          height="100%"
        >
          {children}
        </glamorous.Div>
      </glamorous.Div>
  )
}
export default ProjectModal;