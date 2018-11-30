import React from "react";
import glamorous from "glamorous";
import Plx from "react-plx";
import Sizes from "../vars/Sizes";
import l1 from "../images/carbon/carbon-pattern-1.svg";
import l2 from "../images/carbon/carbon-pattern-2.svg";
import l3 from "../images/carbon/carbon-pattern-3.svg";
const TitleLayer = glamorous(Plx)({

});
const Layer = glamorous(Plx)({
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  overflow: "hidden",
})
const easeOutElastic = t => {
  var p = 0.3;
  return (
    Math.pow(2, -10 * t) * Math.sin(((t - p / 4) * (2 * Math.PI)) / p) + 1
  );
};
const endPlx = 800;
const plx0 = [
  {
    start: 0,
    end: 350,
    // easing: easeOutElastic,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scale"
      },
      {
        startValue: 350,
        endValue: 700,
        property: "translateY"
      }
    ]
  }
];
const plx1 = [
  {
    start: 0,
    end: endPlx,
    // easing: easeOutElastic,
    properties: [
      {
        startValue: 0,
        endValue: 100,
        unit: "vw",
        property: "translateX"
      }
    ]
  }
];
const plx2 = [
  {
    start: 0,
    end: endPlx,
    // easing: easeOutElastic,
    properties: [
      {
        startValue: 0,
        endValue: -100,
        unit: "vw",
        property: "translateX"
      }
    ]
  }
];
const plx3 = [
  {
    start: 0,
    end: endPlx,
    // easing: easeOutElastic,
    properties: [
      {
        startValue: 0,
        endValue: -800,
        unit: "px",
        property: "translateY"
      }
    ]
  }
];
const CarbonPlx = () => {
  return (
    <React.Fragment>
      <TitleLayer parallaxData={plx0}>
        <glamorous.H1 color="white" fontSize={Sizes.head}>
          Carbon Design System
        </glamorous.H1>
      </TitleLayer>
      <Layer parallaxData={plx1}>
        <img src={l1} />
      </Layer>
      <Layer parallaxData={plx2}>
        <img src={l2} />
      </Layer>
      <Layer parallaxData={plx3}>
        <img src={l3} />
      </Layer>
    </React.Fragment>
  );
};

export default CarbonPlx;
