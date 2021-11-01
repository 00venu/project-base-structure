import { mergeStyleSets, AnimationStyles } from "@fluentui/react/lib/Styling";

export const classNames: any = mergeStyleSets({
  linkIsSelected: {
    ".ms-Pivot-link": {
      padding: 0,
      margin: "20 5px 0px",
      color: "#D8D8D8",
      fontSize: "14px",
      fontWeight: "600",
      selectors: {
        "& .ms-Pivot-link:hover,.ms-Pivot-link:active": {
          background: "transparent",
          color: "#008B98",
        },
      },
    },
  },
  pivotItem: {
    ".ms-Pivot-link": {
      padding: 0,
      margin: "0 5px",
      color: "#D8D8D8",
      fontSize: "14px",
      width: "150px",
      fontWeight: "600",
      borderRadius: "4px 0px 0px 4px",
      backgroundColor: "rgb(38, 38, 45)",
      selectors: {
        "& .ms-Pivot-link:hover": {
          background: "#333D3D",
          color: "#008B98",
        },
        "& .is-selected": {
          background: "#333D3D !important",
          color: "#008B98  !important",
        },
      },
    },
  },
  pivotItemImage: {
    width: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-10px",
    padding: "0px 5px",
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
  },
  colorBlue: {
    backgroundColor: "#9CE8E3",
  },
  colorRed: {
    backgroundColor: "#C62828",
  },
  colorOrange: {
    backgroundColor: "#FF8F00",
  },
  searchBox: {
    height: "40px",
    width: "300px",
    border: "1px solid #2E2E33",
    "&:hover": {
      outline: "none",
      border: "1px solid #2E2E33",
    },
    ".ms-SearchBox-field::placeholder": {
      color: "#008B98",
      fontWeight: "600",
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
  rowDetails: {
    backgroundColor: "#2E2E33",
    color: "#ffffff",
    ".ms-DetailsHeader-cellName": {},
  },
  priorities: {
    display: "flex",
    justifyContent: "space-between",
  },
  dropDownContainers: {
    display: "flex",
    margin: "20px 50px",
  },
  dropDownIcon: {
    color: "#008B98",
    width: "15px",
    display: "flex",
  },
  horizontalLine: {
    width: "100%",
    height: "0.5px",
    backgroundColor: "#5D5D5D",
    position: "relative",
    top: "44px",
  },
  dropDownStyles: {
    ".ms-Dropdown-title": {
      backgroundColor: "#1D1D24",
      color: "#008B98",
      border: "1px solid #2E2E33",
      boxSizing: "border-box",
      borderRadius: "4px",
      height: "40px",
      width: "200px",
      outline: "none",
      paddingTop: "4px",
    },
  },
  toggleButton: {
    margin: '0px 10px',
  },
  choiceGroupStyles:{
".ms-ChoiceFieldGroup-flexContainer":{
display:"flex",
flexWrap:"wrap",
},
".ms-ChoiceField":{
  width:"50%",
},

".ms-ChoiceField-field:after":{
  width: '18px',
  height: '18px',
  top: "1px",
  left:"1px",
  background:"transparent",
},
  },
  backButton: {
    backgroundColor: "#008B98",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  trainAlertParent: {
    backgroundColor: "#141414",
    borderRadius: "3px",
    padding: "10px",
    marginTop: "20px",
  },
  defaultButton:{
    border: "1px solid #008B98",
    boxSizing: "border-box",
    lineHeight: " 16px",
    borderRadius: " 50px",
    color: "white",
    whiteSpace: "nowrap",
    backgroundColor: "#008B98",
    margin: "10px",
    width: "100px",
    selectors: {
      "&:hover": {
        backgroundColor: "#333D3D",
        color: "#008B98",
        border: "1px solid #333D3D",
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
});
