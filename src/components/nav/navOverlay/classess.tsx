import { mergeStyleSets } from "@fluentui/react/lib/Styling";

export const classNames = mergeStyleSets({
  navOverlayWrapper: {
    width: "250px",
    height: "100%",
    backgroundColor: "#141414",
    position: "fixed",
    top: "60px",
    left: 0,
    bottom: 0,
    zIndex: "1001",
    cursor: "auto",
  },
});
