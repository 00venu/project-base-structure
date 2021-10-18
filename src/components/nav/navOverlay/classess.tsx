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
    overFlow: "auto",
  },
  expandedNav: {
    li: {
      a: {
        padding: "15px 20px",
        textAlign: "left",
        // border: "1px solid red",
        verticalAlign: "middle",
        color: "#D8D8D8",
        display: "flex",
        alignItems: "center",
        position: "relative",
        selectors: {
          "& a:hover": { background: "#333D3D" },
        },
      },
    },
    ul: {
      display: "none",
      li: {
        a: {
          display: "block",
          padding: "20px 5px 20px 65px",
          selectors: {
            "& ul li a:hover": { background: "#333D3D" },
          },
        },
      },
    },
  },
  mainicon: {
    paddingRight: "20px",
  },
  navTip: {
    width: "10px",
    height: "13px",
    flexGrow: 1,
    textAlign: "right",
    transform: "rotate(90deg)",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: "20px",
    margin: "auto",
  },
  p: {
    padding: 0,
    margin: 0,
  },
  submenuBackground: {
    background: "#1D1D24",
    a: {
      p: {
        transform: "rotate(-90deg)",
      },
    },
    ul: {
      display: "block",
    },
  },
});
