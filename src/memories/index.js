import Colors from "../vars/Colors";
import carbonDesignSystem from "../projects/carbonDesignSystem";
import TheShortcut from "../memories/theShortcut";
import Japan from "../memories/japan";
import pano from "../memories/pano";

import carbonPattern from "../images/carbon/carbon-pattern.svg";
import templeArch from "../images/japan/templeArch.jpg"
import riders from "../images/theShortcut/GC032439.JPG"
import jack from "../images/r3/jack.jpg";
import hawaii from "../images/pano/hawaii-open-valley.jpg";


const memories = {
  theShortcut: {
    slug: "the-shortcut",
    name: "The Shortcut",
    image: riders,
    size: 75,
    x: "end",
    y: "end",
    color: Colors.pink,
    component: TheShortcut
  },
  pano: {
    slug: "panoramas",
    name: "Panoramas",
    image: hawaii,
    x: "end",
    y: "start",
    component: pano,
  },
  r3: {
    slug: "btc-r3",
    name: "BTC R3",
    image: jack,
    x: "end",
    y: "end",
    component: carbonDesignSystem
  },
  Japan: {
    slug: "japan",
    name: "Japan",
    image: templeArch,
    size: 75,
    x: "end",
    y: "end",
    component: Japan,
  },
};
export default memories;