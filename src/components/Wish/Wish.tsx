

// type Props = {}

import { Box, Button, CardActions, Container, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import products from "../../assets/db/db"
import { ShoppingBasket } from "@mui/icons-material"
import DeleteIcon from '@mui/icons-material/Delete';


export const Wish = () => {

  return (
    <>
    <Container maxWidth="xl" sx={{ display:{xs:'flex'}}}>
      <ImageList variant="masonry" cols={4} gap={7} sx={{mt:3}}>
        {
          products.map(({id,title,price,description,brand,img}) => (
            <ImageListItem key={id}>
                <img
                  src={img}
                  srcSet={img}
                  alt={title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={title} sx={{fontWeight:'bold'}} /> <ImageListItemBar position="below" title={`Price:€${price}`} sx={{fontWeight:'bold'}} />
                <CardActions>
                  <Button size="medium" color="primary" startIcon={<ShoppingBasket />}>
                      Buy Now
                  </Button>
           <Button size="medium" color="primary" startIcon={<DeleteIcon />}>
             Delete Product
           </Button>
         </CardActions>

            </ImageListItem>
          ))
        }
      </ImageList>
    </Container>
    </>
    
  )
}
