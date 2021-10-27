import { useState } from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { classNames } from "./landingPage/classess";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";

const classNames_dropdown = mergeStyleSets({
  bg: {
    maxWidth: "500px",
    backgroundColor: "#26262d",
    padding: "30px",
    margin: "0 auto",
    position: "relative",
    ".msl-vars ": {
      width: "100%",
    },
    ".msl": {
      border: 0,
      backgroundColor: "#18181d",
      fontSize: "14px !important",
    },
    ".msl-arrow-icn": {
      color: "#008b98",
    },
    ".msl-arrow-btn": {
      selectors: {
        ":hover": {
          backgroundColor: "transparent",
        },
      },
    },
    ".msl-options": {
      backgroundColor: "#18181d !important",
      selectors: {
        ".msl-option:hover": {
          backgroundColor: "transparent !important",
          color: "#008b98 !important",
        },
      },
    },
    ".msl-option-active": {
      backgroundColor: "transparent !important",
      color: "#008b98 !important",
    },
    ".msl-chip": {
      backgroundColor: "#26262d !important",
    },
    ".msl-chip-delete": {
      backgroundColor: "transparent",
      color: "#fff",
      selectors: {
        ":hover": {
          backgroundColor: "transparent",
        },
      },
    },
    ".msl-clear-btn": {
      display: "none",
    },
  },
  iconArrow: {
    width: "10px",
    height: "10px",
    color: "#008b98",
  },
  optionsCount: {
    width: "28px",
    height: "28px",
    display: "block",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: "65px",
    margin: "auto",
    color: "#fff",
    backgroundColor: "#008b98",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "30px",
  },
});
const MultiSelect = require("react-multiple-select-dropdown-lite").default;
const UnitOverview = () => {
  const [count, setCount]: any = useState(0);
  const { pageHeader } = classNames;
  const { bg, iconArrow, optionsCount } = classNames_dropdown;
  const handleOnchange = (val: any) => {
    val = val.split(",").filter((x:any) => x);
    setCount(val.length);
  };

  const options = [
    { label: "Option 1", value: "option_1" },
    { label: "Option 2", value: "option_2" },
    { label: "Option 3", value: "option_3" },
    { label: "Option 4", value: "option_4" },
  ];

  return (
    <div>
      <h3 className={pageHeader} style={{ padding: "20px" }}>
        UnitOverview
      </h3>
      <div className={bg}>
        <MultiSelect
          onChange={handleOnchange}
          options={options}
          placeholder={count === 0 ? "Select..." : ""}
          downArrowIcon={<Icon iconName="FlickUp" className={iconArrow} />}
        />
        <span className={optionsCount}>{count}</span>
      </div>
    </div>
  );
};

export default UnitOverview;
