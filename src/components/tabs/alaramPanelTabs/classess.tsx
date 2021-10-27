import { mergeStyleSets, AnimationStyles } from "@fluentui/react/lib/Styling";
import { panelCards } from "../../panels/serviceNotificationPanel/classess";
//linkIsSelected

export const classNames: any = mergeStyleSets(
  {
    
    linkIsSelected: {
      '.ms-Pivot[role="tablist"]':{
        display:'flex',
        justifyContent:'space-between',
        borderBottom:'1px solid #666'
      },
      ".ms-Pivot-link": {
        padding: 0,
        margin: "0 5px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
       
        selectors: {
          "& .ms-Pivot-link:hover": {
            background: "transparent",
            color: "#008B98",
          },
        },
      },
      ".is-selected": {
        color: "#008B98",
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
      marginTop: "15px",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#18181d",
      padding: "15px 10px 10px 10px",
      borderRadius: "3px",
      ".ms-Toggle": {
        position: "relative",
        selectors: {
          ":after": {
            content: "''",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: "-35%",
            borderRight: "1px solid #666",
          },
          "& .ms-Toggle:last-child:after": {
            border: 0,
          },
        },
      },
      label: {
        paddingLeft: "10px",
      },
      div: {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        ".ms-Toggle-background": {
          border: "1px solid #008B98",
        },
        ".ms-Toggle-thumb": {
          backgroundColor: "#fff",
        },
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
      border: "2px solid #666",
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
      border: "2px solid #c62828",
      "svg path": {
        fill: "#c62828",
      },
    },
    colorOrange: {
      border: "2px solid #ff8f00",
      "svg path": {
        fill: "#ff8f00",
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
    repairPriorityLow: {
      color: "#ff8f00",
      fontSize: "12px",
      paddingRight: "15px",
      position: "relative",
      fontFamily: "roboto-med",
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
          backgroundColor: "#ff8f00",
          borderRadius: "50%",
        },
      },
    },
    repairPriorityHigh: {
      color: "#c62828",
      fontSize: "12px",
      paddingRight: "15px",
      position: "relative",
      fontFamily: "roboto-med",
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
          backgroundColor: "#c62828",
          borderRadius: "50%",
        },
      },
    },
    trainColorBlue: {
      path: {
        fill: "#0277bd",
      },
    },
    trainColorPink: {
      path: {
        fill: "#8e24aa",
      },
    },
    noData: {
      textAlign: "center",
      fontSize: "22px",
      color: "#008B98",
      paddingTop: "20px",
      h3: {
        fontSize: "18px",
        fontWeight: "normal",
      },
    },
    tabParent: {
      marginTop: "15px",
      '.ms-Pivot[role="tablist"]':{
        borderBottom:0,
      },
      ".ms-Pivot--tabs": {
        display: "flex",
        justifyContent: "space-between",
        button: {
          minWidth:'30%',
          height: "39px",
          flexGrow: 1,
          position: "relative",
          boxSizing: "border-box",
          padding: "inherit 8px inherit 10px",
          borderRadius: "3px",
          color: "#fff",
         
          // backgroundColor: "#18181d",
          selectors: {
            "& .ms-FocusZone button:first-child": {
              marginLeft: 0,
            },
            "& .ms-FocusZone button:hover": {
              color: "#fff",
              backgroundColor: "#333D3D !important",
            },
          },
          p: {
            paddingLeft: "10px",
            flexGrow: " 1",
            textAlign: "right",
          },
        },
        ".is-selected": {
          backgroundColor: "#333D3D !important",
          position: "relative",
          selectors: {
            ":after": {
              width: "16px",
              height: "16px",
              content: "'▼'",
              position: "absolute",
              bottom: "5px",
              left: 0,
              right: 0,
              margin: "auto",
              color: "#333D3D",
              fontSize: "14px",
              visibility: "visible !important",
              overflow: "visible !important",
            },
          },
        },
      },
    },
    toggleSize: {
      height: "18px",
      width: "32px",
    },
  },
  panelCards,
  {
    labelWidth: {
      maxWidth: "200px",
      textAlign:'left'
    },
    labelWidth2: {
      maxWidth: "100px",
    },
    spannerIcon: {
      width: "16px",
      height: "16px",
      verticalAlign: "middle",
      marginRight: "3px",
    },
    cardsParent: {
      height: "48vh !important",
      overflow: "auto",
      marginTop: "20px",
    },
    cardHeaderContainer:{
      alignItems:'flex-start'
    }
  }
);
