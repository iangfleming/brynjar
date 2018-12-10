import Colors from "../vars/Colors";
import carbonDesignSystem from "./carbonDesignSystem";
import CollegePlus from "./CollegePlus";
import IBMDesignCamp from "./IBMDesignCamp";
import mobileFirst from "./mobileFirst";
import phobioOps from "./phobioOps";

import carbonPattern from "../images/carbon/carbon-pattern.svg";
import warehousePattern from "../images/phobio/warehouse-pattern.svg";
import ibmLogo from "../images/mobileFirst/ibm-logo.svg";
import acornsPattern from "../images/acorns/acorns-pattern.svg";
import hacktime1 from "../images/carbon/hacktime-1.jpg";
import hacktime2 from "../images/carbon/hacktime-2.jpg";
import hacktime3 from "../images/carbon/hacktime-3.jpg";

const projects = {
  carbonDesignSystem: {
    slug: "carbon-design-system",
    name: "Carbon Design System",
    description: "An award winning design system for IBM",
    color: Colors.red,
    image: carbonPattern,
    component: carbonDesignSystem
  },
  phobioOps: {
    slug: "phobio-ops",
    name: "Phobio Operations App",
    description: "Using design and modern technology to improve the warehouse experience",
    color: Colors.yellow,
    image: warehousePattern,
    component: phobioOps
  },
  mobileFirst: {
    slug: "mobilefirst",
    name: "IBM MobileFirst",
    description: "Not everything goes according to plan",
    color: Colors.red,
    image: ibmLogo,
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
    name: "CollegePlus Home Page",
    description: "Design is more than making stuff pretty",
    color: Colors.purple1,
    image: hacktime1,
    component: CollegePlus
  },
}
export default projects;