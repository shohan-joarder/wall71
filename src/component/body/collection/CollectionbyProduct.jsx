import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { url } from "../../common/Url";
import Loading from "../Loading";
import Photos from "../Photos";

export default function CollectionbyProduct(){
    const {id} = useParams();
    const [products,setProduct]= useState();
    const [loading,setLoading]= useState(true);
    const my_url = `${url}/collections/${id}`

    const fetchData =async()=>{
        setLoading(true);
        try {
            const response = await fetch(my_url);
            const item = await response.json()
            console.log(item.products);
            setLoading(false)
            setProduct(item.products);
            

        } catch (error) {
            console.log(error)

            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData();
    })

    if (loading) {
        return (
          <main>
            <Loading />
          </main>
        );
      }
    return(<main style={{ paddingTop: "50px" }}>
    <Typography variant="h6" align="center">
      Most Popular
    </Typography>
    <Photos photos={products} fetchPhotos={fetchData} />
  </main>)
}