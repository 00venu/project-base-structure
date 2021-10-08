import { mergeStyleSets, AnimationStyles } from "@fluentui/react/lib/Styling";
import { panelCards } from "../../panels/serviceNotificationPanel/classess";
//linkIsSelected

export const classNames: any = mergeStyleSets(
  {
    linkIsSelected: {
      ".ms-Pivot-link": {
        padding: 0,
        margin: "0 5px",
        color: "#008B98",
        fontSize: "14px",
        fontWeight: "600",
        selectors: {
          "& .ms-Pivot-link:hover": {
            background: "transparent",
            color: "#008B98",
          },
        },
      },
    },

    customTabs: {
      display: "flex",
      justifyContent: "space-between",
      li: {
        width: "23%",
        borderBottom: "2px solid transparent",
        cursor: "pointer",
        span: {
          textAlign: "center",
          color: "#008B98",
          padding: "10px 0",
          fontFamily: "roboto-med",
        },
      },
    },
    tabActive: {
      borderBottom: "2px solid #008B98 !important",
    },
    buttonParent: {
      paddingTop: "15px",
      button: {
        marginRight: "10px",
      },
    },
    priorityButtons: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px 0",
      li: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "#18181d",
        padding: "5px 10px",
        marginRight: "5px",
        borderRadius: "3px",
        position: "relative",
        cursor: "pointer",
        fontWeight: "normal",
        fontFamily: "roboto-reg",
      },
      p: {
        padding: 0,
        margin: 0,
        flexGrow: 1,
        textAlign: "right",
      },
    },
    trainCircle: {
      width: "15px",
      height: "15px",
      position: "relative",
      display: "block",
      border: "1px solid #666",
      borderRadius: "50px",
      padding: "3px",
      marginRight: "5px",
      svg: {
        width: "13px",
        height: "13px",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
      },
    },
    colorRed: {
      border: "1px solid red",
      "svg path": {
        fill: "red",
      },
    },
    colorOrange: {
      border: "1px solid orange",
      "svg path": {
        fill: "orange",
      },
    },
    activeButton: {
      backgroundColor: "#333D3D !important",
      selectors: {
        ":after": {
          width: "16px",
          height: "16px",
          content: "'▼'",
          position: "absolute",
          bottom: "-12px",
          left: 0,
          right: 0,
          margin: "auto",
          color: "#333D3D",
          fontSize: "14px",
        },
      },
    },
    repairPriority: {
      color: "orange",
      fontSize: "12px",
      paddingRight: "15px",
      position: "relative",
      selectors: {
        ":after": {
          width: "8px",
          height: "8px",
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          backgroundColor: "orange",
          borderRadius: "50%",
        },
      },
    },
  },
  panelCards
);
