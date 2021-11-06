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
    const [curl,set_url]=useState(`${url}/search/${name}`);
    const [is_next_url,set_is_next_url]=useState(null);

    const color_url = `${url}/search/${name}`

    const fetchColor = async()=>{
        try {
            const response = await fetch(curl);
            const color = await response.json(response);
            const next_page = (color.next_page_url !== null) ? set_url(color.next_page_url) : url;
            const is_next_page = (color.next_page_url !== null) ? set_is_next_url(true) : false;
            // console.log(color);
            setColors(color.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchColor();
        document.addEventListener("scroll",handleScroll);
        
      },[name]);

      const handleScroll = () => {
      let userScrollHeight = window.innerHeight + window.scrollY;
      let windowBottomHeight = document.documentElement.offsetHeight;
      if (userScrollHeight >= windowBottomHeight) {
        // console.log(is_next_url);
        if(is_next_url !== null){
          set_url(is_next_url);
          // set_url(is_next_url);
          console.log(is_next_url);
          fetchColor();
        }
      
      }
    };

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