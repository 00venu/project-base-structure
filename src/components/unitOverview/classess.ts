import { mergeStyleSets, AnimationStyles } from "@fluentui/react/lib/Styling";

export const classNames: any = mergeStyleSets({
  linkIsSelected: {
    ".ms-Pivot-link": {
      padding: 0,
      margin: "0 5px",
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
 
  horizontalLine: {
    width: "100%",
    height: "0.5px",
    backgroundColor: "#5D5D5D",
    position: "relative",
    top: "44px",
  },
});
