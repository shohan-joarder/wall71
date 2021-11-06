import React,{useState} from "react";

import my_lazy from "../image/hats.jpg"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


import {
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { photo_url } from "../common/Url";
import { useStyles } from "./BodyStyles";
import Singleproduct from "./collection/Singleproduct";

const clickHandler =()=> <Singleproduct p={1} />;
  
export default function Photo({ id, collections_name, name, photo }) {
  const classes = useStyles();
  return (
    <Grid className="clickedClass" item xs={6} sm={3} lg={2} onClick={clickHandler} >
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
