import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { url } from "../common/Url";
import Photos from "./Photos";
import BodyTop from "./BodyTop";
import Colorsection from "./Colorsection";
import Loading from "./Loading";

export default function Allphotos() {
  const [loading, setloading] = useState(true);
  const [photos, setphotos] = useState([]);

  let p_url = `${url}/products/popular`;
  //   console.log(p_url);

  const fetchPhotos = async () => {
    setloading(true);
    try {
      const response = await fetch(p_url);
      const photos = await response.json();
      //   console.log(photos.data);
      //   console.log(`fafa`);
      setloading(false);
      setphotos(photos.data);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <>
      <main style={{ paddingTop: "50px" }}>
        <BodyTop />
        <Colorsection />
        <Typography variant="h6" align="center">
          Most Popular
        </Typography>
        <Photos photos={photos} fetchPhotos={fetchPhotos} />
      </main>
    </>
  );
}
