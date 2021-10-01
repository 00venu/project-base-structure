import { ITheme, mergeStyleSets, getTheme } from "@fluentui/react/lib/Styling";

const theme: ITheme = getTheme();
const { palette, semanticColors, fonts } = theme;

export const classNames = mergeStyleSets({
  header: {
    height: "60px",
    backgroundColor: "#26262D",
    display: "flex",
    alignItems: "center",
    color: " #008B98",
  },
  mainLogo: {
    width: "156px",
    marginLeft: "24px",
  },
  hamberger: {
    width: "50px",
    height: "100%",
    backgroundColor: "#1d1d24",
    position: "relative",
    textAlign: "center",
    cursor: "pointer",
  },
  hambergerIcon: {
    color: "#999",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
  },
  headerRight: {
    height: "100%",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  updateInfo: {
    fontSize: "14px",
  },
  refreshIcon: {
    cursor: "pointer",
  },
  defaultBtn: {
    border: "1px solid #008B98",
    boxSizing: "border-box",
    borderRadius: "50px",
    color: " #008B98",
    backgroundColor: " #26262D",
    cursor: "pointer",
    padding: "18px",
    margin: "0 16px",
    selectors: {
      "&:hover": { color: " #008B98" },
    },
  },
  userDropdown: {
    width: "220px",
    height: "100%",
    color: "#ccc",
    backgroundColor: "#1d1d24",
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    span: {
      fontSize: "12px",
      color: "#999",
    },
  },
  profileIcon: {
    borderRadius: "50%",
    padding: "10px",
    backgroundColor: "#333D3D",
    color: " #008B98",
    fontFamily: "roboto-bold",
    fontWeight: "normal",
    fontSize: "14px",
    marginLeft: "5px",
  },
});
