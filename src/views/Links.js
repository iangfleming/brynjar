import React, { Component } from "react";
import glamorous from "glamorous";
import {Spring, animated} from "react-spring";

class Links extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  render() {
    const { data } = this.state;
    const Modal = glamorous.div({
      zIndex: "100",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      background: "white",
      clipPath: "polygon(0 0, 100% 1%, 100% 85%, 50% 95%, 0 85%)",
    });
    const StyledLink = glamorous.a({
      display: "block",
      height: "10rem",
      width: "10rem",
      background: "white"
    });
    return (
      <Spring from={{ transform: "translateY(-100vh" }} to={{ transform: "translateY(0)" }}>
        {styles => (
          <animated.div style={{...styles}}>
            <Modal>
              {data.length <= 0
                ? null
                : data.map(dat => (
                    <StyledLink href={dat.link}>{dat.title}</StyledLink>
                  ))}
            </Modal>
          </animated.div>
        )}
      </Spring>
    );
  }
}

export default Links;
