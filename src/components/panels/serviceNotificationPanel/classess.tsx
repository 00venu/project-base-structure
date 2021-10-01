import { mergeStyleSets } from "@fluentui/react/lib/Styling";

export const classNames = mergeStyleSets({
  minimizedPanel: {
    width: "45px",
    height: "100%",
    paddingTop: "40px",
    backgroundColor: "#26262D",
    position: "fixed",
    top: "60px",
    left: "50px",
    bottom: 0,
    zIndex: "999",
    borderTop: "1px solid #666",
    textAlign: "center",
  },
  textRotation: {
    transform: "rotate(-90deg)",
    color: "#F5F5F5",
    whiteSpace: "nowrap",
    marginTop: "190px",
  },
  textContainer: {
    marginTop: "30px",
    position: "relative",
    span: {
      position: "absolute",
      top: "4px",
      right: 0,
      left: 0,
      bottom: 0,
      margin: "auto",
    },
  },
});
