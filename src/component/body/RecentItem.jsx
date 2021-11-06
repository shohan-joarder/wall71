import { Typography } from "@material-ui/core";
import React ,{useState,useEffect } from "react"

import { useParams } from "react-router";
import { url } from '../common/Url';
import Photos from "./Photos";
import BodyTop from "./BodyTop";

export default function RecentItem(){
    const [product,setProduct] = useState([]);
    let { name } = useParams();
    const [url,set_url] = useState(`${url}/products/${name}`);
  
    // const c_url = `${url}/products/${name}`
  
    const fetchProduct = async()=>{
      const response = await fetch(url)
      const products = await response.json();
      console.log(products +"00");
      setProduct(products.data);
    }
  
    useEffect(()=>{
      fetchProduct();
    },[name])
    
    // const handleScroll = () => {
    //   let userScrollHeight = window.innerHeight + window.scrollY;
    //   let windowBottomHeight = document.documentElement.offsetHeight;
    //   if (userScrollHeight >= windowBottomHeight) {
    //     // fetchPhotos();
    //     if (is_next != null) {
    //       fetchPhotos();
    //     }
    //   }
    // };

    return (
        <>
        <main style={{ paddingTop: "50px" }}>
            <BodyTop/>
          <Typography variant="h6" align="center">
            {name}
          </Typography>
          <Photos photos={product} fetchPhotos={fetchProduct} />
        </main>
      </>
        );
}