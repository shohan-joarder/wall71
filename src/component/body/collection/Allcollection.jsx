import React,{useEffect,useState} from 'react';
import { ImageList,ImageListItem,ImageListItemBar,ListSubheader ,IconButton} from '@material-ui/core';
import { url,collection_photo } from '../../common/Url';
import { Link } from 'react-router-dom';
import Loading from "../Loading";

export default function Allcollection() {
    const [collection, setcollection] = useState([]);
    const [loading, setloading] = useState(true);
    const collection_url = `${url}/collections`

    const fatchCollection =async()=>{
        setloading(true);
        try {
            const response = await fetch(collection_url);
            const collections = await response.json();
            setcollection(collections)
            setloading(false);
        } catch (error) {
            setloading(false);
            console.log(error)
        }
    }

    useEffect(()=>{
        fatchCollection();
    },[])

    if (loading) {
        return (
          <main>
            <Loading />
          </main>
        );
      }
  return (
    <ImageList style={{marginTop:"50px"}} >
      {collection.map((item) => (
          
        <ImageListItem key={item.cover_photo}>
            <Link to={`/product_by_collection/${item.id}`} id="link">
          <img
            src={`${collection_photo}/${item.cover_photo}?w=248&fit=crop&auto=format`}
            srcSet={`${collection_photo}/${item.cover_photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.name}`}
              >
              </IconButton>
            }
          />
          </Link>
        </ImageListItem>
        
      ))}
    </ImageList>
  );
}

