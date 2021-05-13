import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import Cartitem from './Cartitem';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    const EmptyCart = () => (
        <Typography variant='subtitle1'>Oops! Cart is Empty
        <Link to='/'>Add some shoes to your cart</Link>
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                <Cartitem item={item} />
                </Grid>
            ))}
            </Grid>
            <div>
                <Typography variant='h4'>
                Subtotal: { cart.subtotal.formatted_with_symbol }
                </Typography>
                <Button size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                <Button size='large' type='button' variant='contained' color='primary'>Check Out</Button>
            </div>
        </>
    )

    if(!cart.line_items) return "Loading.."
    return (
        <Container>
        <div />
        <Typography variant='h3' gutterBottom>Your Cart</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
