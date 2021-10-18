import { mergeStyleSets } from "@fluentui/react/lib/Styling";

export const classNames = mergeStyleSets({
  leftNav: {
    width:  "3.125%",
    height: "100%",
    backgroundColor: "#141414",
    position: "fixed",
    top: "60px",
    left: 0,
    bottom: 0,
    zIndex: "999",
  },
  navItems: {
    li: {
      textAlign: "center",
      cursor: "pointer",
      position: "relative",
      selectors: {
        "& li:hover": { background: " #008B98" },
        "& li:hover svg path": { fill: "#fff" },
        "& li:hover a span": {
          transform: "rotate(180deg)",
        },
        "& li:hover ul": {
          display: "block",
        },
      },
      a: {
        padding: "15px 0",
        display: "block",
        position: "relative",
        span: {
          width: "10px",
          height: "16px",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          "& a:hover span": {
            transform: "rotate(180deg)",
          },
        },
      },
      ul: {
        width: "200px",
        position: "absolute",
        top: 0,
        right: "-200px",
        textAlign: "left",
        background: " #008B98",
        display: "none",
        li: {
          a: {
            color: "#fff",
            textAlign: "left",
            boxSize: "border-box",
            padding: "auto 20px",
            selectors: {
              "& ul li a:hover": { background: "#1996A2" },
            },
          },
        },
      },
    },
  },
  active: {
    background: " #008B98",
    fill: "#fff",
    "svg path": {
      fill: "#fff",
    },
  },
});
