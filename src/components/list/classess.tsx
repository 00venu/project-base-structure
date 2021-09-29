import {
  ITheme,
  mergeStyleSets,
  getTheme,
  getFocusStyle,
} from "@fluentui/react/lib/Styling";
const theme: ITheme = getTheme();
const { palette, semanticColors, fonts } = theme;

export const classNames = mergeStyleSets({
  container: {
    width: "500px",
    overflow: "auto",
    maxHeight: 500,
    margin: "20px auto",
    boder: "1px solid #ccc",
  },
  itemCell: [
    getFocusStyle(theme, { inset: -1 }),
    {
      minHeight: 54,
      padding: 10,
      boxSizing: "border-box",
      borderBottom: `1px solid ${semanticColors.bodyDivider}`,
      display: "flex",
      selectors: {
        "&:hover": { background: palette.neutralLight },
      },
    },
  ],

  itemContent: {
    marginLeft: 10,
    overflow: "hidden",
    flexGrow: 1,
  },
});
