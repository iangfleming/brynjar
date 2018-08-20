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
          height="90%"
          padding="1.5rem"
        >
          {children}
        </glamorous.Div>
      </glamorous.Div>
  )
}
export default ProjectModal;