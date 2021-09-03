import { Container, Grid } from "@material-ui/core";
import React from "react";
import Photo from "./Photo";

export default function Photos({ photos, fetchPhotos }) {

  let p = null;
  if (photos.length === 0) {
    p = `No photo found`;
  } else {
    p = `Our Photos`;
  }

  return (
    <section>
      <div className="title"></div>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {photos.map((photo) => {
            return <Photo key={photo.id} {...photo} />;
          })}
        </Grid>
      </Container>
    </section>
  );
}
