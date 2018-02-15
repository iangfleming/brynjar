import React, { Component } from 'react';
import glamorous from "glamorous";
// import ShapeOverlay from "../utils/ShapeOverlay";

class Goo extends Component {
  state = {
    numPoints = 85,
    duration = 500,
    delayPointsArray = [],
    delayPointsMax = 300,
    delayPerPath = 150,
    timeStart = Date.now(),
    isOpened = false,
    isAnimating = false
  }

  toggle = () => {
    this.state.isAnimating = true;
    for (var i = 0; i < this.state.numPoints; i++) {
      this.state.delayPointsArray[i] = Math.random() * this.state.delayPointsMax;
    }
    if (this.state.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }

  open = () => {
    this.state.isOpened = true;
    this.state.elm.classList.add('is-opened');
    this.state.timeStart = Date.now();
    this.renderLoop();
  }

  close = () => {
    this.state.isOpened = false;
    this.state.elm.classList.remove('is-opened');
    this.state.timeStart = Date.now();
    this.renderLoop();
  }

  updatePath = (time) => {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100
    }

    let str = '';
    str += (this.isOpened) ? `M 0 0 H ${points[0]}` : `M ${points[0]} 0`;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
      str += `C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${points[i + 1]} ${p} `;
    }
    str += (this.isOpened) ? `H 100 V 0` : `H 0 V 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }
  renderLoop() {
    this.render();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    }
    else {
      this.isAnimating = false;
    }
  }
}
  componentDidMount() {
    // this.handleAnimation();
 }

  handleAnimation = () => {
    // let overlay = null; 
    // if (!overlay) {
    //   const overlay = new ShapeOverlay(this.node);
    // }
    // if (overlay.isAnimating) {
    //   return false;
    // }
    // overlay.toggle();
  }

  render() {
    const GooeySVG = glamorous.svg({
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: "0",
      left: "0"
    })

    const GooeyPath = glamorous.path({},
      ({fillColor}) => ({
        fill: fillColor
      })
    )
    return (
      <GooeySVG ref={(node) => {this.node = node}} className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
        <GooeyPath fillColor="red" className="shape-overlays__path"></GooeyPath>
        <GooeyPath fillColor="green" className="shape-overlays__path"></GooeyPath>
        <GooeyPath fillColor="blue" className="shape-overlays__path"></GooeyPath>
      </GooeySVG>
    )
  }
}

export default Goo;