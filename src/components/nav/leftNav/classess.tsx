import { mergeStyleSets } from "@fluentui/react/lib/Styling";

export const classNames = mergeStyleSets({
  leftNav: {
    width: "50px",
    height: "100%",
    backgroundColor: "#141414",
    position: "fixed",
    top: "60px",
    left: 0,
    bottom: 0,
    zIndex: "999",
  },
});
