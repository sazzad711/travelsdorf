import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#fcc1a7",
  },
  title: {
    display: "none",
    color: "#0e0b0a",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.1),
    "&:hover": { backgroundColor: alpha(theme.palette.common.black, 0.3) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0e0b0a",
  },
  inputRoot: {
    color: "#0e0b0a",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
