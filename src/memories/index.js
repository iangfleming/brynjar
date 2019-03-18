import Colors from "../vars/Colors";
import carbonDesignSystem from "../projects/carbonDesignSystem";
import TheShortcut from "../memories/theShortcut";
import Japan from "../memories/japan";
import r3 from "../memories/r3";
import pano from "../memories/pano";

import templeArch from "../images/japan/templeArch.jpg"
import riders from "../images/theShortcut/thumbnail.jpg"
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
  r3: {
    slug: "btc-r3",
    name: "BTC R3",
    image: jack,
    x: "end",
    y: "end",
    component: r3,
    disabled: false,
  },
  Japan: {
    slug: "japan",
    name: "Japan",
    image: templeArch,
    size: 75,
    x: "end",
    y: "end",
    color: Colors.pink,
    component: Japan,
    disabled: true,
  },
};
export default memories;