import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyles";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import { Theme } from "../Theme";
import { Link } from "react-router-dom";

export default function Navbar({ navlinks, handleDrawerToogler }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar
        className={classes.ToolBar}
        style={{ backgroundColor: Theme.colors.base1 }}
      >
        <Typography variant="h5" component="h6">
          {"< wall71 />"}
        </Typography>

        {/* navlinks  */}
        <Box component={Hidden} xsDown>
          <Box>
            {navlinks.map((item, i) => (
              // <Link to={`${item.r}`} id={`link_${i}`}>
              <Button
                key={i}
                className={classes.navlinks}
                to={`${item.r}`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                component={"Link"}
                color="inherit"
              >
                {item.label}
              </Button>
              // </Link>
            ))}
          </Box>
        </Box>
        <Box component={Hidden} smUp>
          <IconButton color="inherit" onClick={handleDrawerToogler}>
            <MenuOpenRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
