import { mergeStyleSets, AnimationStyles } from "@fluentui/react/lib/Styling";
import { panelCards } from "../../panels/serviceNotificationPanel/classess";
//linkIsSelected

export const classNames: any = mergeStyleSets(
  {
    linkIsSelected: {
      marginTop: "10px",
      button: {
        padding: 0,
        margin: 0,
      },
      selectors: {
        "& button:hover": {
          background: "transparent",
          color: "#fff",
        },
      },
    },
  },
  panelCards
);
