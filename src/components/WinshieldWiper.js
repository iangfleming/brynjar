import React, {Component} from "react";
import glamorous from "glamorous";

class WindShieldWiper extends Component {
  handleMouseMove = e => {
    console.log(e)
  }
  render() {
    const Wrapper = glamorous.div({
      height: "250px",
      // position: "relative",
      // display: "flex",
      // justifyContent: "center",
    })
    const Wiper = glamorous.div({
      width: "50%",
      position: "absolute",
      top: "0",
    })
    const After = glamorous.img({
      height: "250px"
    })
    const Before = glamorous.img({
      height: "250px",
      position: "absolute",
      top: "0",
    })
    return (
      <Wrapper onMouseMove={(e) => this.handleMouseMove(e)}>
        <Wiper>
          <glamorous.Div overflow="hidden" display="block" height="100%" width="100%">
            <After src={this.props.after} />
          </glamorous.Div>
        </Wiper>
        <Before src={this.props.before} />
      </Wrapper>
    )
  }
}
export default WindShieldWiper;