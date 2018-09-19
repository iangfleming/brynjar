import Colors from "../vars/Colors";
import carbonDesignSystem from "./carbonDesignSystem";
import CollegePlus from "./CollegePlus";
import IBMDesignCamp from "./IBMDesignCamp";
import Acorns from "./Acorns";
import mobileFirst from "./mobileFirst";
import phobioOps from "./phobioOps";

const projects = {
  carbonDesignSystem: {
    slug: "carbon-design-system",
    name: "Carbon Design System",
    description: "lorem lorem stuf stuff",
    color: Colors.teal,
    component: carbonDesignSystem
  },
  phobioOps: {
    slug: "phobio-ops",
    name: "Phobio Operations App",
    description: "lorem lorem stuf stuff",
    color: Colors.yellow,
    component: phobioOps
  },
  acorns: {
    slug: "acorns",
    name: "Acorns",
    description: "Personal library of helpers",
    color: Colors.purple1,
    component: Acorns
  },
  mobileFirst: {
    slug: "mobilefirst",
    name: "IBM MobileFirst",
    description: "lorem lorem stuf stuff",
    color: Colors.red,
    component: mobileFirst
  },
  IBMDesignCamp: {
    slug: "ibm-design-camp",
    name: "IBM Design Camp",
    description: "lorem lorem stuf stuff",
    color: Colors.yellow,
    component: IBMDesignCamp
  },
  CollegePlus: {
    slug: "collegeplus",
    name: "Redesigning the CollegePlus Home Page",
    description: "Design is more than making stuff pretty",
    color: Colors.purple1,
    component: CollegePlus
  },
}
export default projects;