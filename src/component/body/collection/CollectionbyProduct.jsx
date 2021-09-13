import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { url } from "../../common/Url";
import Loading from "../Loading";
import Photos from "../Photos";

export default function CollectionbyProduct(){
    const {id} = useParams();
    const [photos,setPhotos]= useState([]);
    const [loading,setLoading]= useState(true);
    const [category,setCategory] = useState(null);
    const my_url = `${url}/collections/${id}`

    const fetchData =async()=>{
        setLoading(true);
        try {
            const response = await fetch(my_url);
            const item = await response.json()
            
            setLoading(false)
            setPhotos(item.products.data);
            setCategory(photos[0]["collections_name"]);
        } catch (error) {
            console.log(error)
            setLoading(false)

        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    if (loading) {
        return (
          <main>
            <Loading />
          </main>
        );
      }
    return(
    <main style={{ paddingTop: "50px" }}>
    <Typography variant="h6" align="center">
      {category}
    </Typography>

    <Photos photos={photos} fetchPhotos={fetchData} />

  </main>)
}