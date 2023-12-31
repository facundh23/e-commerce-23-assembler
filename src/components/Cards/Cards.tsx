import { ProductProps} from '../../types/types';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartProvider';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';




export const Cards = (props: ProductProps ) => {
    const {id, title, description, img, store, price} = props;
   
 const { handleAddToCart  } = useCart();
  return (
    <Card key={id} sx={{ width:'450px', maxHeight:'750px' ,maxWidth:'100%', marginBottom:10, marginTop:10, height:850,paddingTop:1, }}>

    <CardActionArea sx={{
        display:"flex",
        flexDirection:"column",
        marginBottom:10,
        height:'600px'
    }}>
      <Link to={`/products/${store}`}>
        <CardMedia
        component="img"
        image={img}
        alt={store}
        sx={{height:'200px', gap:1, width:'200px'}}
      />
      </Link>
      <CardContent sx={{display:"flex", flexDirection:"column", alignItems:'center', justifyContent:'center', width:'400px', fontSize:'15px'}}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
          Description Product: {description}  
          
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold', mt:2}}>
          
          Price : ${price}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:0, padding:0}}>

      <Button size="small"  startIcon={<ShoppingCartIcon />} onClick={() => handleAddToCart?.(id)} >
            Add Cart
      </Button>
     
    </CardActions>
    
  </Card>
  )
}

