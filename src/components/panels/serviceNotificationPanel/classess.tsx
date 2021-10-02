import {
  mergeStyleSets,
  AnimationStyles,
  // AnimationClassNames,
  //AnimationVariables,
} from "@fluentui/react/lib/Styling";

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
    zIndex: "997",
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
  leftArrow: {
    cursor: "pointer",
    position: "absolute",
    top: "30px",
    right: "-20px",
    bottom: 0,
  },
  maximizedPanel: {
    width: "300px",
    height: "100%",
    backgroundColor: "#26262D",
    position: "fixed",
    top: "60px",
    left: "50px",
    bottom: 0,
    zIndex: "998",
    borderTop: "1px solid #666",
  },
  leftArrowClose: {
    cursor: "pointer",
    position: "absolute",
    top: "30px",
    right: "-20px",
    bottom: 0,
  },
  maximizedPanelOpen: {
    ...AnimationStyles.slideRightIn400,
  },
  maximizedPanelClose: {
    ...AnimationStyles.slideLeftOut400,
  },
});
