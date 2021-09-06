import React from "react"
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { url } from "../common/Url";
import Photos from "./Photos";
import Colorsection from "./Colorsection";
import { Typography } from "@material-ui/core";

export default function Color(){
   let { name } = useParams();
    const [colors, setColors] = useState([]);

    

    const color_url = `${url}/search/${name}`

    const fetchColor = async()=>{
        try {
            const response = await fetch(color_url);
            const color = await response.json(response);
            console.log(color);
            setColors(color.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchColor();
      },[name]);

    return (<>
        <main style={{ paddingTop: "50px" }}>
          <Colorsection />
          <Typography variant="h6" align="center">
            {name}
          </Typography>
          <Photos photos={colors} fetchPhotos={fetchColor} />
        </main>
      </>)
}