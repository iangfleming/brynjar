import glamorous from "glamorous";
import Colors from "../vars/Colors";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";

export const Hero = glamorous.div(({bg}) => ({
  position: "relative",
  background: bg,
  height: "350px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  zIndex: "-1"
}));
export const HeroTitle = glamorous.h1(({white}) => ({
  color: white ? "white" : "inherit",
  borderBottom: white ? "2px solid white" : `2px solid ${Colors.text}`,
  fontFamily: "Oswald",
  fontWeight: 600,
  fontSize: Sizes.head,
  margin: "0",
  paddingBottom: "1rem",
  zIndex: "1",
  [MediaQueries.md]: {
    fontSize: Sizes.superhead,
  }
}));
export const HeroDesc = glamorous.p(({white}) => ({
  color: white ? "white" : "inherit",
  margin: "0",
  paddingTop: "1rem",
  maxWidth: Sizes.content,
  fontStyle: "italic"
}));
export const Content = glamorous.div({
  maxWidth: Sizes.content,
  margin: "0 auto"
})
export const SectionTitle = glamorous.h3({
  fontFamily: "Oswald",
  fontSize: Sizes.head,
  textTransform: "uppercase"
});
export const FullWidth = glamorous.div(({bg}) => ({
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  background: bg ? bg : Colors.text
}));
export const BlockLink = glamorous.a(({bg}) => ({
  color: "white",
  background: bg,
  textDecoration: "none",
  padding: "1px 4px",
  margin: "0 4px",
  display: "inline-block",
  transition: "transform 75ms",
  [":hover"]: {
    transform: "scale(1.05)",
  }
}));
export const Row = glamorous.div(({bg}) => ({
  display: "flex",
  alignItems: "center"
}));