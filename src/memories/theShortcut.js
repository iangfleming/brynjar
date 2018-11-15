import React, { Component } from "react";
import glamorous from "glamorous";
import MapGL, {FlyToInterpolator} from "react-map-gl";
import map from "../images/theShortcut/map.jpg";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import Colors from "../vars/Colors";
import {
  Hero,
  HeroTitle,
  HeroDesc,
  Content,
  SectionTitle,
  FullWidth
} from "../components/ProjectLayout";

class TheShortcut extends Component {
  state = {
    viewport: {
      latitude: 30.314,
      longitude: -97.8,
      zoom: 10,
      bearing: 0,
      pitch: 0
    },
    settings: {
      dragPan: true,
      dragRotate: false,
      scrollZoom: false,
      touchZoom: false,
      touchRotate: false,
      keyboard: true,
      doubleClickZoom: true,
      minZoom: 0,
      maxZoom: 15,
      minPitch: 0,
      maxPitch: 0
    }
  };
 goToViewport = () => {
   this.setState({
     viewport: {
       latitude: 30.354410,
       longitude: -98.094718,
       zoom: 13,
       transitionInterpolator: new FlyToInterpolator(),
       transitionDuration: 2000
    }
   })
 }
  render() {
    const MapSection = glamorous.div({
      // height: "88vh",
      // position: "relative",
      // backgroundImage: `url(${map})`,
      // backgroundSize: "cover",
      // backgroundPosition: "bottom left"
    });
    const {viewport, settings} = this.state;
    return (
      <glamorous.Div>
          <MapGL
          {...viewport}
          {...settings}
          width="100vw"
          height="88vh"
          mapStyle="mapbox://styles/iangfleming/cjoi0rbyi8det2rpf0mqp37x0"
          onViewportChange={v => this.setState({viewport: v})}
          // preventStyleDiffing={false}
          mapboxApiAccessToken="pk.eyJ1IjoiaWFuZ2ZsZW1pbmciLCJhIjoiY2pvaTBjcTlhMDQ2MzN2bnJmb3g4ZDF6dSJ9.yfnKlG7Xep1RWhYQvUTDnA" />
        <MapSection>
          <glamorous.H1
            fontSize="120px"
            position="absolute"
            bottom="50px"
            whiteSpace="nowrap"
            // top="calc(100% + (8vmin * .5))"
            left="50%"
            transform="translateX(-50%)"
            margin="0"
          >
            The Shortcut
          </glamorous.H1>
          <glamorous.Div
            position="absolute"
            top="0"
            right="0"
            height="100%"
            width="50vw"
            background={Colors.purple1}
            clipPath="polygon(100% 0, 0 0, 100% 100%)"
            padding="0 3rem"
            color="white"
          >
            <glamorous.Div maxWidth="40vw" float="right" paddingTop="3rem">
              <p>This all started with a question mark on the map.</p>
              <button onClick={this.goToViewport}>zoom</button>
              <p>
                In the spring of 2018 I talked Jack (@jkneve) and Gavin
                (@gavincantrel) into exploring a possible shorcut with me. If
                the route worked as planned it would be 80 miles or so. However,
                if the shortcut was dud it would be over 100 miles.
              </p>
              <glamorous.P
                textAlign="right"
                fontStyle="italic"
                marginTop="3rem"
              >
                We were really hoping it would work.
              </glamorous.P>
            </glamorous.Div>
          </glamorous.Div>
        </MapSection>
        <glamorous.Div
          background={Colors.purple1}
          height="100%"
          width="100%"
          marginTop="-60px"
          paddingTop="60px"
        >
          <glamorous.Div margin="0 auto" maxWidth={Sizes.maxWidth}>
            <glamorous.Div
              position="relative"
              padding-bottom="56.25%"
              padding-top="25px"
              height="0"
              margin="4rem 0"
              maxWidth={Sizes.maxWidth}
            >
              <glamorous.Iframe
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                src="https://player.vimeo.com/video/289892193"
                // width="640"
                // height="360"
                border="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              />
            </glamorous.Div>
          </glamorous.Div>
        </glamorous.Div>
      </glamorous.Div>
    );
  }
}

export default TheShortcut;
