const ColorsHex = {
  purple1: "#271924",
  purple2: "#665262",
  purple3: "#B1A0AE",
  red: "#F95457",
  orange: "#F98825",
  yellow: "#F5D41F",
  teal: "#01B3BB",
  green: "#5FA45A",
  background: "#FBFBFB",
  gray1: "#696b76",
  gray2: "#c2c3c8",
  gray3: "#ededee"
};
const ColorsVars = {
  text: ColorsHex.purple1,
  primary: ColorsHex.yellow,
  secondary: ColorsHex.teal,
  tertiary: ColorsHex.red,
};
const Colors = {...ColorsHex, ...ColorsVars};
export default Colors;
