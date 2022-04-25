import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import NavLinks from "./NavLinks";
import styles from "./styles.module.css";

const useStyles = makeStyles({
  list: {
    width: 300,
    backgroundColor: "var(--theme)",
    color: "var(--white)",
    height: "100%",
    fontWeight: "500 !important",
  },
  fullList: {
    width: "auto",
    backgroundColor: "var(--theme)",
    color: "var(--white)",
    fontWeight: "500 !important",
  },
});

export default function DrawerComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <NavLinks />
    </div>
  );

  return (
    <div className={styles.mobileNavbar}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            style={{ marginTop: "0.8rem" }}
          >
            <MenuIcon
              fontSize="large"
              style={{
                color: "var(--white)",
                fontSize: "2rem",
              }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
