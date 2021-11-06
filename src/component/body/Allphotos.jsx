import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { url } from "../common/Url";
import Photos from "./Photos";
import BodyTop from "./BodyTop";
import Colorsection from "./Colorsection";
import Loading from "./Loading";
import Singleproduct from "./collection/Singleproduct";

export default function Allphotos() {
  const [loading, setloading] = useState(true);
  const [photos, setphotos] = useState([]);
  const [currentpage, setpage] = useState(`${url}/products/popular`);
  const [is_next,  setnext]  = useState(null);
  
  const fetchPhotos = async () => {
    setloading(true);
    try {
      const response = await fetch(currentpage);
      const photos = await response.json();
      console.log(photos);
      const next = (photos.next_page_url !== null) ? setnext(photos.next_page_url) : null;
      const next_page_url =(photos.next_page_url != null) ? setpage(photos.next_page_url) : currentpage;

      setloading(false);
      setphotos(photos.data);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
    window.addEventListener("scroll", handleScroll);
  }, []);


  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      if (is_next != null) {
        fetchPhotos();
      }
    }
  };

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
        <Singleproduct />
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
