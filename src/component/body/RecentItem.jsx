import { Typography } from "@material-ui/core";
import React ,{useState,useEffect } from "react"

import { useParams } from "react-router";
import { url } from '../common/Url';
import Photos from "./Photos";
import BodyTop from "./BodyTop";

export default function RecentItem(){
    const [product,setProduct] = useState([]);
    let { name } = useParams();
  
    const c_url = `${url}/products/${name}`
  
    const fetchProduct = async()=>{
      const response = await fetch(c_url)
      const products = await response.json();
      setProduct(products.data);
    }
  
    useEffect(()=>{
      fetchProduct();
    },[name])
    
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