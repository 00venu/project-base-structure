import { mergeStyleSets, AnimationStyles } from "@fluentui/react/lib/Styling";
import { panelCards } from "../serviceNotificationPanel/classess";

export const classNames: any = mergeStyleSets(
  {
    minimizedAlaramPanel: {
      width: "45px",
      height: "100%",
      paddingTop: "40px",
      backgroundColor: "#26262D",
      position: "fixed",
      top: "60px",
      right: 0,
      bottom: 0,
      zIndex: "1",
      borderTop: "1px solid #666",
      textAlign: "center",
    },
    textRotation: {
      transform: "rotate(-90deg)",
      color: "#F5F5F5",
      whiteSpace: "nowrap",
      marginTop: "25px",
    },
    textContainer: {
      marginTop: "25px",
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
      left: "-20px",
      bottom: 0,
    },
    maximizedAlaramPanel: {
      width: "350px",
      height: "100%",
      backgroundColor: "#26262D",
      position: "fixed",
      top: "60px",
      right: 0,
      bottom: 0,
      zIndex: "998",
      borderTop: "1px solid #666",
      padding: "20px 10px",
      boxSizing: "border-box",
    },
    maximizedPanelOpen: {
      ...AnimationStyles.slideLeftIn400,
    },
    maximizedPanelClose: {
      ...AnimationStyles.slideRightOut400,
    },
    trainAlertParent: {
      backgroundColor: "#141414",
      borderRadius: "3px",
      padding: "10px",
      marginTop: "20px",
    },
  },
  panelCards
);
