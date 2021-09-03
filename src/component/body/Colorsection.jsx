import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";
import { url } from "../common/Url";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function Colorsection() {
  const [color, setcolor] = useState([]);
  const [loading, setloading] = useState(true);
  const c_url = `${url}/color-group`;
  const fetchColor = async () => {
    setloading(true);
    try {
      const response = await fetch(c_url);
      const color = await response.json();
      console.log(color);
      setloading(false);
      setcolor(color);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchColor();
  }, []);

  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="xl">
        <Grid container spacing={2} style={{display: "block"}}>
          {color.map((col) => {
            return (
              <Link to={`/color/${col.id}`} id="link">
              <ButtonBase
                focusRipple
                key={col.name}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: "25%",
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${col.icon})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {col.name}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
              </Link>
            );
          })}
        </Grid>
      </Container>
    
    </section>
  );
}
