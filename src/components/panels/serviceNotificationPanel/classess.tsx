import {
  mergeStyleSets,
  AnimationStyles,
  // AnimationClassNames,
  //AnimationVariables,
} from "@fluentui/react/lib/Styling";

export const panelCards: any = {
  panelHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    h3: {
      fontFamily: "roboto-reg",
    },
  },
  searchIcon: {
    width: "24px",
    height: "24px",
    marginRight: "10px",
    cursor: "pointer",
  },
  cardsParent: {
    height: "78vh",
    overflow: "auto",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#2E2E33",
    marginBottom: "10px",
    boxSizing: "border-box",
    padding: "10px",
    borderRadius: "3px",
    cursor: "pointer",
    selectors: {
      "&:hover": {
        backgroundColor: "#333D3D",
      },
    },
    ul: {
      display: "flex",
      selectors: {
        "& ul:last-child": {
          fontSize: "12px",
        },
      },
      li: {
        listStyle: "none",
        textAlign: "right",
        selectors: {
          "& li:first-child": {
            paddingRight: "10px",
            position: "relative",
            ":after": {
              content: "'|'",
              position: "absolute",
              top: 0,
              right: "4px",
              bottom: 0,
              margin: "auto",
              color: "#666",
            },
          },
        },
      },
    },
  },
  cardHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardBody: {
    padding: "20px 0",
  },
  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    div: {
      display: "flex",
      alignItems: "center",
    },
  },
  labelWidth: {
    maxWidth: "70px",
  },
  labelWidth2: {
    maxWidth: "140px",
  },
};

export const classNames: any = mergeStyleSets(
  {
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
      padding: "20px 10px",
      boxSizing: "border-box",
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
  },
  panelCards
);
