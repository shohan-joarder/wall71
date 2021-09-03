import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { photo_url } from "../common/Url";
import { typography } from "@material-ui/system";

import { useStyles } from "./BodyStyles";

export default function Photo({ id, collections_name, name, photo }) {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3} lg={2}>
      <Box className={classes.imageContainer}>
        <img
          src={`${photo_url}/${photo}`}
          alt={name}
          className={classes.responsiveImg}
        />
      </Box>
      <Typography className="imageTitle">{name}</Typography>
    </Grid>
  );
}
