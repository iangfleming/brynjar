import Colors from "../vars/Colors";
import carbonDesignSystem from "../projects/carbonDesignSystem";
import TheShortcut from "../memories/theShortcut";

import carbonPattern from "../images/carbon/carbon-pattern.svg";
import hacktime1 from "../images/carbon/hacktime-1.jpg";
import hacktime2 from "../images/carbon/hacktime-2.jpg";
import hacktime3 from "../images/carbon/hacktime-3.jpg";

const memories = {
  theShortcut: {
    slug: "the-shortcut",
    name: "The Shortcut",
    description: "",
    color: Colors.red,
    image: carbonPattern,
    grow: 1,
    component: TheShortcut
  },
  test2: {
    slug: "test",
    name: "test",
    description: "",
    color: Colors.red,
    image: carbonPattern,
    grow: 2,
    component: carbonDesignSystem
  },
  test4: {
    slug: "test",
    name: "test",
    description: "",
    color: Colors.red,
    image: carbonPattern,
    grow: 1,
    component: carbonDesignSystem
  },
};
export default memories;