import { mergeStyleSets } from "@fluentui/react/lib/Styling";

export const classNames = mergeStyleSets({
  roundButton: {
    border: "1px solid #008B98",
    boxSizing: "border-box",
    lineHeight: " 16px",
    borderRadius: " 50px",
    color: "#008B98",
    whiteSpace: "nowrap",
    backgroundColor: "transparent",
    selectors: {
      "&:hover": {
        backgroundColor: "#333D3D",
        color: "#008B98",
        border: "1px solid #333D3D",
      },
      "&:active": {
        backgroundColor: "#333D3D",
        color: "#008B98",
        border: "1px solid #333D3D",
      },
    },
  },
});
