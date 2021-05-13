import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

const Cartitem = ({ item }) => {

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} />
            <CardContent>
                <Typography variant='h4'> {item.name} </Typography>
                <Typography variant='h5'> {item.line_total.formatted_with_symbol} </Typography>
            </CardContent>
            <CardActions>
            <div>
                <Button type='button' size='small'>-</Button>
                <Typography> {item.quantity} </Typography>
                <Button type='button' size='small'>+</Button>
            </div>
            <Button type='button' variant='contained' color='secondary'>Remove</Button>    
            </CardActions>
        </Card>
    )
}

export default Cartitem
