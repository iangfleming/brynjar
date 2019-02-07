import React, { Component } from "react";
import axios from "axios";
import glamorous from "glamorous";

class Links extends Component {
  state = {
    data: [],
    intervalIsSet: false,
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  render() {
    const { data } = this.state;
    const Modal = glamorous.div({
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      background: "black",
      opacity: .5,
    })
    return (
      <Modal>
        <ul>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
                <li style={{ padding: "10px" }} key={data.title}>
                  <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                  <span style={{ color: "gray" }}> data: </span>
                  {dat.title}
                  {dat.link}
                </li>
              ))}
        </ul>
      </Modal>
    );
  }
}

export default Links;
