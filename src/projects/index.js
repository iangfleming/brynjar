import Colors from "../vars/Colors";
import carbonDesignSystem from "./carbonDesignSystem";
import CollegePlus from "./CollegePlus";
import IBMDesignCamp from "./IBMDesignCamp";
import mobileFirst from "./mobileFirst";
import phobioOps from "./phobioOps";

const projects = {
  carbonDesignSystem: {
    slug: "carbon-design-system",
    name: "Carbon Design System",
    description: "An award winning design system for IBM",
    component: carbonDesignSystem
  },
  phobioOps: {
    slug: "phobio-ops",
    name: "Phobio Operations App",
    description: "Using design and modern technology to improve the warehouse experience",
    component: phobioOps
  },
  mobileFirst: {
    slug: "mobilefirst",
    name: "IBM MobileFirst",
    description: "Not everything goes according to plan",
    component: mobileFirst
  },
  // IBMDesignCamp: {
  //   slug: "ibm-design-camp",
  //   name: "IBM Design Camp",
  //   description: "lorem lorem stuf stuff",
  //   color: Colors.yellow,
  //   image: hacktime1,
  //   component: IBMDesignCamp
  // },
  CollegePlus: {
    slug: "collegeplus",
    name: "CollegePlus Home Page",
    description: "Design is more than making stuff pretty",
    component: CollegePlus
  },
}
export default projects;