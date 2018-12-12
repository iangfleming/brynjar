import React, { Component } from "react";
import { Link } from "react-router-dom";
import glamorous from "glamorous";
import Colors from "../vars/Colors";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import { animated, Spring } from "react-spring";

class Card extends Component {
  state = {
    hover: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const StyledLink = glamorous(Link)({
      display: "block",
      position: "relative",
      width: "250px",
      height: "250px",
      marginBottom: "5rem",
      textDecoration: "none",
      color: Colors.text,
      padding: "1rem"
    });
    const CardBorder = glamorous.svg({
      position: "absolute",
      top: 0,
      left: 0,
    });
    const Title = glamorous.h2({
      fontSize: Sizes.superhead,
      fontWeight: "600",
      margin: 0
    });
    const Line = glamorous.div({});

    const titleLines = this.props.projectName.split(" ");

    return (
      <StyledLink to={this.props.projectLink} onMouseOver={() => this.setState({hover: true})}>
        <Title>
          {titleLines.map(line => (
            <Line dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </Title>
        {this.props.children}
        <CardBorder width="250" height="250">
          <Spring
            from={{offset1: 0, offset2: -1000}}
            to={{
              offset1: this.state.hover ? 1000 : 0,
              offset2: this.state.hover ? 0 : -1000
            }}
            duration="5000"
          >
            {props => (
              <g>
                <path
                  fill="none"
                  fill-rule="evenodd"
                  stroke={Colors.teal}
                  stroke-width="8"
                  strokeDasharray="1000"
                  strokeDashoffset={props.offset1}
                  d="M.5.5h249v249H.5z"
                />
                <path
                  fill="none"
                  fill-rule="evenodd"
                  stroke={Colors.pink}
                  stroke-width="8"
                  strokeDasharray="1000"
                  strokeDashoffset={props.offset2}
                  d="M.5.5h249v249H.5z"
                />
              </g>
            )}
          </Spring>
        </CardBorder>
      </StyledLink>
    );
  }
}

export default Card;
