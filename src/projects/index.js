import Colors from "../vars/Colors";
import carbonDesignSystem from "./carbonDesignSystem";
import CollegePlus from "./CollegePlus";
import IBMDesignCamp from "./IBMDesignCamp";
import Acorns from "./Acorns";
import mobileFirst from "./mobileFirst";
import phobioOps from "./phobioOps";

import carbonPattern from "../images/carbon/carbon-pattern.svg";
import hacktime1 from "../images/carbon/hacktime-1.jpg";
import hacktime2 from "../images/carbon/hacktime-2.jpg";
import hacktime3 from "../images/carbon/hacktime-3.jpg";

const projects = {
  carbonDesignSystem: {
    slug: "carbon-design-system",
    name: "Carbon Design System",
    description: "lorem lorem stuf stuff",
    color: Colors.red,
    image: carbonPattern,
    component: carbonDesignSystem
  },
  phobioOps: {
    slug: "phobio-ops",
    name: "Phobio Operations App",
    description: "lorem lorem stuf stuff",
    color: Colors.yellow,
    image: hacktime2,
    component: phobioOps
  },
  acorns: {
    slug: "acorns",
    name: "Acorns",
    description: "Personal library of helpers",
    color: Colors.purple1,
    image: hacktime3,
    component: Acorns
  },
  mobileFirst: {
    slug: "mobilefirst",
    name: "IBM MobileFirst",
    description: "lorem lorem stuf stuff",
    color: Colors.red,
    image: hacktime1,
    component: mobileFirst
  },
  IBMDesignCamp: {
    slug: "ibm-design-camp",
    name: "IBM Design Camp",
    description: "lorem lorem stuf stuff",
    color: Colors.yellow,
    image: hacktime1,
    component: IBMDesignCamp
  },
  CollegePlus: {
    slug: "collegeplus",
    name: "Redesigning the CollegePlus Home Page",
    description: "Design is more than making stuff pretty",
    color: Colors.purple1,
    image: hacktime1,
    component: CollegePlus
  },
}
export default projects;