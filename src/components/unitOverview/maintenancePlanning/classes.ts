import { mergeStyleSets, AnimationStyles } from "@fluentui/react/lib/Styling";

export const classNames: any = mergeStyleSets({
  table: {
    border: "1px solid #5D5D5D",
    width: "526px",
    boxSizing: "border-box",
    borderRadius: "4px 4px 0px 0px",
  },
  tableData: {
    border: "1px solid #5D5D5D",
    width: "526px",
    boxSizing: "border-box",
  },
  horizontalLine: {
    width: "100%",
    height: "0.5px",
    backgroundColor: "#5D5D5D",
    position: "relative",
    top: "43px",
  },
  searchBox: {
    '.ms-SearchBox': {
      width: "170px",
      borderRadius: "4px",
    },
    margin: '0px 20px',
  },
  dropDownStyles: {
    ".ms-Dropdown-title": {
      fontWeight: '500',
      fontSize: '14px',
      color: '#008B98',
    },
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
  choiceGroupStyles: {
    ".ms-ChoiceFieldGroup-flexContainer": {
      display: "flex",
      flexWrap: "wrap",
    },
    ".ms-ChoiceField": {
      width: "50%",
    },

    ".ms-ChoiceField-field:after": {
      width: '18px',
      height: '18px',
      top: "1px",
      left: "1px",
      background: "transparent",
    },
  },
});
