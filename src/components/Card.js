import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import glamorous from "glamorous";
import camelToDash from "../utils/camelToDash";
import Colors from "../vars/Colors";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";

class Card extends Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const CardOuter = glamorous.div(
      {
        position: "relative",
        // minHeight: "10vmax",
        width: "250px",
        height: "250px",
        // backgroundImage: `url(${this.props.projectImage})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center center",
        // padding: "3rem 2rem",
        // marginBottom: "-26px",
        // clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
        // overflow: "hidden",
        // transition: "transform 175ms",
        // [MediaQueries.md]: {
        //   height: "10vmax",
        // },
        // ":after": {
        //   content: " ",
        //   position: "absolute",
        //   top: "0",
        //   left: "0",
        //   height: "100%",
        //   width: "100%",
        //   backgroundColor: this.props.projectColor,
        //   opacity: ".2",
        //   transition: "transform 175ms",
        //   transform: "rotate(-20deg) translateY(125%)"
        // },
        // ":hover": {
        //   transform: "scale(1.05)"
        // },
        // ":active, :focus": {
        //   transform: "scale(1)"
        // },
      },
      ({ open }) => ({
        transform: open ? "scale(3)" : "scale(1)"
      })
    );

    const Title = glamorous.h2({
      fontSize: Sizes.head,
      // color: "white",
      fontWeight: "600",
    });
    const Line = glamorous.div({
      display: "flex",
      justifyContent: "space-between",
    })
    const Desc = glamorous.p({
      // color: "white"
    })
    const StyledLink = glamorous(Link)({
      textDecoration: "none",
      color: Colors.text,
    })

    const titleLines = this.props.projectName.split(" ")
    const titleWrapped = [];
    titleLines.forEach((line) => {
      const wrap = line.replace(/\w/g, "<span>$&</span>");
      titleWrapped.push(wrap);
    })

    console.log(titleLines, titleWrapped)

    return (
      <StyledLink to={this.props.projectLink}>
        <CardOuter open={this.state.open}>
          <glamorous.Div maxWidth={Sizes.maxWidth} margin="0 auto">
            <Title>
              {titleWrapped.map((line) => (
                <Line dangerouslySetInnerHTML={{__html: line}} />
              ))}
            </Title>
            {/* <Desc>{this.props.projectDescription}</Desc> */}
            {this.props.children}
          </glamorous.Div>
        </CardOuter>
      </StyledLink>
    );
  }
}

export default Card;
