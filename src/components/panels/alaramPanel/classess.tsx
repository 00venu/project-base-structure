import { mergeStyleSets, AnimationStyles } from "@fluentui/react/lib/Styling";
import { panelCards } from "../serviceNotificationPanel/classess";

export const classNames: any = mergeStyleSets(
  {
    minimizedAlaramPanel: {
      // width: "50%",
      height: "100%",
      paddingTop: "80px",
      backgroundColor: "#26262D",      
      borderTop: "1px solid #666",
      textAlign: "center",
    },
    textRotation: {
      transform: "rotate(-90deg)",
      color: "#F5F5F5",
      whiteSpace: "nowrap",
      marginTop: "25px",
    },
    arrowRotation: {
      transform: "rotate(-270deg)",          
    },
    arrowRotation90: {
      transform: "rotate(-90deg)",          
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
      backgroundColor: "#26262D",
      borderTop: "1px solid #666",
    },
    maximizedAlaramPanel: {    
      height: "100%",
      backgroundColor: "#26262D",     
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
    mb20: {
      marginBottom: "20px",
    },
  },
  panelCards
);
