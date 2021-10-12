import { mergeStyleSets } from "@fluentui/react/lib/Styling";

export const classNames = mergeStyleSets({
  tableWrap: {
    display: "block",
    maxWidth: "100%",
    overflowX: "scroll",
    overflowY: "hidden",
    //borderBottom: "1px solid #26262D",
    table: {
      width: "100%",
      borderSpacing: 0,
      tbody: {
        tr: {
          selectors: {
            "& tbody tr:nth-child(odd)": {
              backgroundColor: "#26262D",
            },
          },
        },
      },
      tr: {
        selectors: {
          "& tr:last-child td": {
            borderBottom: 0,
          },
          "& tr:last-child th": {
            textAlign: "left",
            padding: "0.1rem 0.5rem",
          },
          "& tr:last-child th:first-child": {
            // borderLeft: "1px solid #26262D",
            color: "transparent",
            ponterEvents: "none",
          },
          "& tr:first-child th": {
            borderLeft: 0,
            borderRight: 0,
          },
          "& tr:first-child th:nth-child(2)": {
            color: "transparent",
          },
        },
      },
    },
    th: {
      margin: 0,
      padding: "0.5rem",
      //borderBottom: " 1px solid #26262D",
      //borderRight: "1px solid #26262D",
      fontWeight: "normal",
    },
    td: {
      margin: 0,
      padding: "0.5rem",
      // borderBottom: " 1px solid #26262D",
      // borderRight: "1px solid #26262D",
      whiteSpace: "nowrap",
      width: " 1%",
      selectors: {
        "& td:first-child": {
          // borderLeft: "1px solid #26262D",
        },
      },
    },
  },
  collapse: {
    width: "0.0000000001% !important",
  },

  pagination: {
    display: "none",
    padding: "0.5rem",
  },
});
