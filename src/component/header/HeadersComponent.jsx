import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import DrawerComponent from "./DrawerComponent";
import HeaderContent from "./HeaderContent";

export default function HeadersComponent() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "Home", r:"/" , Id: "home" },
    { label: "Collection", r:"/", Id: "collection" },
    // { label: "Contact", Id: "Contact" },
  ];

  return (
    <Box className={classes.HeardeWraper} id="Headder">
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />
      <HeaderContent />
    </Box>
  );
}
