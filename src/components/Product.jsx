import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Product = ({product, onAddToCart}) => {
    return (
        <div>
            <Card>
                <CardMedia image={product.media.source} title={product.name} />
                <CardContent>
                    <div>
                        <Typography variant='h5' gutterBottom>
                        {product.name}
                        </Typography>
                        <Typography variant='h5' gutterBottom>
                        {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography dangerouslySrtInnerHTML={{__html: product.description}} variant='body2' color='textSecondary' />
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label='Add to cart' onClick={() => onAddToCart(product.id, 1)} >
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product

