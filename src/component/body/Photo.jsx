import React from "react";

import my_lazy from "../image/hats.jpg"


import {
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { photo_url } from "../common/Url";

import { useStyles } from "./BodyStyles";


export default function Photo({ id, collections_name, name, photo }) {
  const classes = useStyles();
  return (
    <Grid className="clickedClass" item xs={6} sm={3} lg={2}  >
      <Box className={classes.imageContainer}>
        <img
          srcSet={`${photo_url}/${photo}.webp`}
          alt={name}
          className={classes.responsiveImg}
          src={my_lazy}
        />
      </Box>
      <Typography className="imageTitle">{name}</Typography>
    </Grid>
  );
}
