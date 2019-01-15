import React from "react";
import { withRouter } from "react-router";

class ScrollReset extends React.Component {
  componentDidMount() {
    this.props.history.listen(() => window.scrollTo(0, 0))
  }
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
      )
  }
}
export default withRouter(ScrollReset);