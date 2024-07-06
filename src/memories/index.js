import Colors from "../vars/Colors";
import TheShortcut from "../memories/theShortcut";
import r3 from "../memories/r3";
import pano from "../memories/pano";
import film from "../memories/film";

import riders from "../images/theShortcut/thumbnail.jpg"
import jack from "../images/r3/jack.jpg";
import hawaii from "../images/pano/hawaii-open-valley.jpg";
import film3 from "../images/film/film3.jpg";


const memories = {
  // film: {
  //   slug: "film",
  //   name: "35mm Film",
  //   image: film3,
  //   size: 75,
  //   x: "end",
  //   y: "end",
  //   color: Colors.text,
  //   component: film,
  //   disabled: false,
  // },
  r3: {
    slug: "btc-r3",
    name: "BTC R3",
    image: jack,
    x: "end",
    y: "end",
    component: r3,
    disabled: false,
  },
  theShortcut: {
    slug: "the-shortcut",
    name: "The Shortcut",
    image: riders,
    size: 75,
    x: "end",
    y: "end",
    color: Colors.pink,
    component: TheShortcut,
    disabled: false,
  },
  pano: {
    slug: "panoramas",
    name: "Panoramas",
    image: hawaii,
    x: "end",
    y: "start",
    component: pano,
    disabled: false,
  },
};
export default memories;