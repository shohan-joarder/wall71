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

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 4,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];
