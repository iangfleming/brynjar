import Colors from "../vars/Colors";
import carbonDesignSystem from "../projects/carbonDesignSystem";
import TheShortcut from "../memories/theShortcut";

import carbonPattern from "../images/carbon/carbon-pattern.svg";
import hacktime1 from "../images/carbon/hacktime-1.jpg";
import hacktime2 from "../images/carbon/hacktime-2.jpg";
import hacktime3 from "../images/carbon/hacktime-3.jpg";
import templeArch from "../images/japan/templeArch.jpg"
import riders from "../images/theShortcut/GC032439.JPG"

const memories = {
  theShortcut: {
    slug: "the-shortcut",
    name: "The Shortcut",
    image: riders,
    size: 75,
    x: "end",
    y: "end",
    color: Colors.red,
    component: TheShortcut
  },
  test2: {
    slug: "test",
    name: "test",
    image: carbonPattern,
    x: "end",
    y: "end",
    component: carbonDesignSystem
  },
  test4: {
    slug: "test",
    name: "test",
    image: carbonPattern,
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
    component: carbonDesignSystem
  },
};
export default memories;